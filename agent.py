from dotenv import load_dotenv

from livekit import agents
from livekit.agents import AgentServer, AgentSession, Agent, room_io
from livekit.plugins import google, noise_cancellation

from prompt import AGENT_INSTRUCTION, AGENT_RESPONSE

load_dotenv(".env.local")


class Assistant(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions=AGENT_INSTRUCTION
        )


server = AgentServer()


@server.rtc_session(agent_name="my-agent")
async def entrypoint(ctx: agents.JobContext):

    session = AgentSession(
        llm=google.realtime.RealtimeModel(
            model="gemini-2.5-flash-native-audio-preview-12-2025",
            voice="Puck",
            instructions=AGENT_INSTRUCTION,
        ),
    )

    await session.start(
        room=ctx.room,
        agent=Assistant(),
        room_options=room_io.RoomOptions(
            audio_input=room_io.AudioInputOptions(
                noise_cancellation=noise_cancellation.BVC(),
            ),
        ),
    )

    await session.generate_reply(
        instructions=AGENT_RESPONSE
        + """
        Introduce yourself briefly by saying:
        "Hello Sir, JARVIS at your service. How may I assist you today?"
        """
    )


if __name__ == "__main__":
    agents.cli.run_app(
        agents.WorkerOptions(entrypoint_fnc=entrypoint)
    )
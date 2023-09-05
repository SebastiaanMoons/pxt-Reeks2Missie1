### @hideIteration true
### @flyoutOnly true
# Mission 1 (v1.0)

```blocks
player.onChat("parcour1", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)

	AgentExtension.agentMoveFourDirection(FourDirection.Left, 1)
	AgentExtension.agentMoveFourDirection(FourDirection.Back, 3)
	AgentExtension.agentMoveFourDirection(FourDirection.Right, 4)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 8)
	AgentExtension.agentMoveFourDirection(FourDirection.Right, 3)
	AgentExtension.agentMoveFourDirection(FourDirection.Back, 5)
	AgentExtension.agentMoveFourDirection(FourDirection.Left, 1)
})

player.onChat("parcour2", function () {
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 1)
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 3)
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 4)
    agent.turn(LEFT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 8)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 3)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 5)
    agent.turn(RIGHT_TURN)
	AgentExtension.agentMoveFourDirection(FourDirection.Forward, 1)
})
```

```template
player.onChat("gogogo", function () {
    agent.turn(LEFT_TURN)
    AgentExtension.agentMoveFourDirection(FourDirection.Forward, 1)
    CodeCosmos.checkExercise()
})

```
## Building fields
Use the learning platform to solve the exercise.
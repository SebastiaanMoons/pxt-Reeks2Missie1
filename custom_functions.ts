enum TwoDirectionForwardBack {
    //% block="forward"
    Forward = FourDirection.Forward,
    //% block="back"
    Back = FourDirection.Back
}

//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount stappen"
    //% direction.defl=TwoDirectionForwardBack.Forward
    //% amount.defl=1
    //% x.min=1 x.max=10
    export function agentMoveTwoDirectionForwardBack(direction: TwoDirectionForwardBack, amount: number) {
        for (let i = 0; i < amount; i++) {
            agent.move(direction === 0 ? FORWARD : BACK, 1)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(LIGHT_GRAY_CONCRETE, posBelowAgent)) {
                wrongMoves++
            }
        }        
    }
    
    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount stappen"
    //% direction.defl=FourDirection.Forward
    //% amount.defl=1
    //% x.min=1 x.max=10
    export function agentMoveFourDirection(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            agent.move(direction, 1)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(COBBLESTONE_SLAB, posBelowAgent)) {
                wrongMoves++
            }
        }
    }
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="Check exercise"
    //% block.loc.nl="Controleer oefening"
    export function checkExercise() {
        const posBelowAgent= world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        
        if (blocks.testForBlock(EMERALD_BLOCK, posBelowAgent) && wrongMoves==0) {
            player.execute(`function exercises/end_exercise`);
        } else {
            wrongMoves = 0;
            player.execute(`function exercises/fail`);
        }
    }

}
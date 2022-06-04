let Magneetti = 0
basic.forever(function () {
    Magneetti = input.magneticForce(Dimension.Strength)
    if (Magneetti < 600) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 120)
        basic.pause(500)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo4)
    } else {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 2)
        basic.pause(400)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo4, 400)
        basic.pause(500)
    }
})

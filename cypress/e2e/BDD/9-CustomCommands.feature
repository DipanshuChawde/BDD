# https://www.youtube.com/watch?v=qDWaoqFSPM4&t=131s

Feature: Custom Command Example-swaglab

    Scenario Outline: Scenario Outline name: Custom Command
        Given Custom Command for login with <email> and <password>
        When Dual Custom Command

        Examples:
            | email                    | password     |
            | lambdatest11@yopmail.com | lambdatest21 |
            | dipanshuc26@gmail.com    | dip26        |


Feature: Shadow Dom example Ecommerce Site - Lambda Test

    Scenario: Validate SHadow DOM Elements
        Given Enter the data in fields which are Inside the Shadow DOM: 1st way
        When Enter the data in fields which are Inside the Shadow DOM: 2nd way

# we can not inspect shadow dom element . 
# it is written under #shadow root.
# if you can not able to inspect any element in that case that may be shadow element         

# there are tow types of to get that type of element 
# 1. to use shadow method 
# 2. update following line in  below e2e in config.js file and re run code in browser 
# included following line in config.js below e2e "includeShadowDom: true,"
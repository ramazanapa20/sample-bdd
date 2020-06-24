Feature: To show animatic 3D in

  @OutlineScenario
  Scenario Outline: Animatic 3D

    Given I am on "<page>" page
    When  I click pre-production section tab
    And I click animatic 3D subsection
    And I close section tab
    And I click add animatic button
    And I type <title> to 3D
    And I type <element> animation
    And I type <description> description
#    And I select scene
#    And I type <cost> anticipated
#    And I choose permission of free copyright
#    And I choose any authorization
    Then I click add animatic 3D continue button

    Examples:
      | page     | title | element | description     | cost  |
      | animatic | pixar | wall-e  | exinct of world | 20000 |


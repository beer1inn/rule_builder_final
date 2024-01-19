Problem Statement: 

DEVELOP A RULE BUILDER APPLICATION “DECISIONHUB” THAT EMPOWERS BUSINESS ANALYSTS TO CREATE, SAVE, AND VISUALIZE DECISION STRATEGIES. 
PROVIDE A NO-CODE RULE WRITING EXPERIENCE AND VISUAL REPRESENTATION TO TEST THESE RULES IN REALTIME AND OBSERVE THE CALCULATIONS AT EACH STEP.

Solution :
Design a clean and user-friendly interface that guides users through the rule creation process.
Provide english like rule writing experience to business analysts so that they can enter the rule as simple texts for the rule creation process.  
Allow them to select operators, comparators and value as per their requirements.
Allow them to create as many number of rules they want.


Approach :
We have used the components as LHS, Operator and RHS which can allow multiple rules to be written.Everytime we click the Add Rule button a new input field is added . 
LHS filed allows to enter the rule as an expression. For example: Annual_Income + 10000 * Cibil_Score
Operator acts as a function which takes Input and give the resulting output. Example: ==, !=, ||, &&
RHS field allows to enter the input value.
Comparator allows to compare two or more than two input rule (Nested Rules) using Any, All.
The Add rule button allows to add another rule if the buisness analyst wants to create nested rules.      


TechStack:
HTML 
CSS
JS
NODE JS
MONGO DB


function renderSurveys(surveys) { //this is a array object and it has two surveys 
    var newSurvey = surveys.map((currentSurvey)=>{ // map loops through the arrays and uses "currenSurvey" for each index in function "renderSurvey"
        return renderSurvey(currentSurvey) // return a fucntion that will be use on line 12  
    })
    return `
            <div>
                ${newSurvey.join(" ")} <!-- this is joing all the index together-->
            </div>`
    
}
function renderSurvey(survey) { // I am accessing  the first index(0) of the container 
    var surveyHTML = survey.fields.map((currentfield)=> { // using .map to loop through the field array and using a parameter to accessing each "field" in the field object  
        return renderfield(currentfield) // returning a new function that will be calle next 
    })
     return `<div> 
                <h1>${survey.title}</h2> <!--this will display the title of the survey--> 
                <hr/> <!-- this will add the line accross the survey-->
                ${surveyHTML.join("")} <!-- i am displaying the fucntion obj array  without any commas on the HTML page-->
                <button type="button" class"btn-success">${survey.submitButtonText}</button> <!-- i am displaying the submit button for the user-->
            </div>`   
}

function renderfield(field) { // this function will display the indexes with the field array 
    var optionHTML= [] 
    if(field.options){ // since both of the surveys dont have option index i have to use a conditional statment 
        optionHTML = field.options.map((option)=>{ // accessing all the options array , the parameter is for each "option" in the options array 
            return `
                <input type= "${field.type}"/> ${option}<br> <!-- this is allowing the user type their input(option) by declaring the "type array" within the "field object" --> 
            
            ` 

        })
    }else{ /// since every fields does not have an (option array: see line 93) , this is has to be outside of the .map function 
        return (
            `<p>${field.label}</p> 
            <input type = "${field.type}"/><br>`
        )
    }
    return (
        `<div>
        <p>${field.label}</p>
        ${optionHTML.join("")}
        </div>`
    )
}





function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                    
                        
                    
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}

function renderCircles(circles) {  // this is creating the container 
     circleHTML = circles.map (e => { // I am telling the comupter what i want inside of the html container 
        return `<div class = "circle my-3 mx-auto" style="width:${e.radius}px; height:${e.radius}px; background-color:${e.color}; border-radius: ${e.radius}px"></div>`
        //this is styling the circles ; m= margin , y= padding-top and padding-bottom or margin-top and margin-bottom , p=padding, x=  sets both padding-left and padding-right or margin-left and margin-right
     })
    return `<div class="text-center mt-5 justify-content-around"> ${circleHTML.join("")}</div>`
    // this is position the circles on the html page 
} 
    
    
function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}
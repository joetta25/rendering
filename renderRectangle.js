
function renderRectangle(rectangle) { // I created a container and i defined and styled a rectangle inside 
    return ` <div class="text-center mt-5" style="width:${rectangle.width}px; // i am centering the rectangle on the html page and the margin top in 5 and px: padding left&right
           height:${rectangle.height}px;
           background-color:${rectangle.color};">
        </div>`
    
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}
//Line 4. I used class to style the rectangle , I centered it and applied the width of the rectangle 
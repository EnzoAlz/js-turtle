function main()
{
    
    pendown();
/*
*below is my variables.
I created the bricks. All other objects were made by my teamates. 
*I have them here so it is easier to find them when needed. 
*/
    var minX  = -getWidth()/2
    var minY  =  -getHeight()/2
    var maxY  =  getHeight()/2
    var maxX  =  getWidth()/2
    var bricksNumber= prompt("How many brick faces do you want on the bottom of the screen? 13 fills the bottom row.")






    goto(minX,minY)    
    for(var i = 0; i < bricksNumber; i++)
    {
        /*
    *Below is my whole brick process.
    *I had to first make and define a rectangle. 
*Next I made the whole brick face and made sure the turtle ended up in the right spot every time to make another brick face.
* Coloring the brick was to complicated for me so I just colored the brick lines. 
*I also mixed up the 2 var. I meant to make height 10 and width 20 but it was too late when I realized this so I had to power throught backwards.
* Surprisingly my easiest part was creating the bricksNumber variable and making a prompt for that.  
        */
        colour(194,74,12,1)
    

/*
*Below are my only 2 variables different from the rest. I have them here to allow for me to go back easier.
*/
        var height=20
        var width=10
        
        rectangle(20,10)
        forward(width)
        right(90)
        forward(height)
        right(90)
        forward(width)
        right(90)
        forward(height)
        right(180)
        forward(height)
        right(270)
        
        forward(width)
        right(270)
        forward(height/2)
        
        right(90)
        forward(width)
        right(270)
        forward(height)
        right(270)
        forward(width)
        
        right(180)
        forward(width)
        right(270)
        forward(height/2)
        right(180)
        forward(height*2)
        
        right(270)
        forward(width)
        right(270)
        forward(height)
        right(270)
        forward(width)
        right(270)
        forward(height)
        right(270)
        forward(width)
        right(270)
        forward(height*2)
        right(270)
        forward(width)
        right(270)
        forward(height*1.5)
        right(90)
        forward(width)
        right(270)
        forward(height/2)
        right(90)
        forward(width)
        right(180)
        }

        
    }
    /*
    *Below is how to make 1 single rectangle.
    *All of this allows for line 39 to make sense. 
    */
 function rectangle(height, width)
 {
    colour(194,74,12)
    forward(width)
    right(90)
    forward(height)
    right(90)
    forward(width)
    right(90)
    forward(height)
    right(180)
    forward(height)
    right(270)
    /*
    *Conrats! You made it to the bottom of my code.
    */
 }
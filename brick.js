function main()
{
    
    pendown();

    var minX  = -getWidth()/2
    var minY  =  -getHeight()/2
    var maxY  =  getHeight()/2
    var maxX  =  getWidth()/2


    goto(minX,minY)    
    for(var i = 0; i < 13; i++)
    {
        

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
 function rectangle(height, width)
 {
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
 }
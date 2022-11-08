function main()
{
    
    pendown();

    var minX  = -getWidth()/2
    var minY  =  -getHeight()/2
    var maxY  =  getHeight()/2
    var maxX  =  getWidth()/2
    var stairsNumber= prompt("How many stair steps do you want? 5 fills it fully.")

    goto(maxX,maxY)
    right(90)
    for(var i = 0; i < stairsNumber; i++)
    {
    forward(100)
    right(90)
    forward(100)
    right(270)
        }
    }
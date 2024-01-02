var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.image.FromURL("BirthdayImage.jpg", function (img){
Block_image_object = img;
Block_image_object.scaleToWidth(700);
Block_image_object.scaleToHeight(510);
Block_image_object.set({
Top:0,
left:0
});
canvas.add(Block_image_object);
});
}

function playSound(){
x.play()
}

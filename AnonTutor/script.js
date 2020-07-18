function redirect()
{
    var occupation = document.getElementById('Occupation').value;

    if(occupation == 0)
    {
        window.open("subject.html");
    } else if(occupation == 1)
    {
        window.open("tutorlogin.html");
    } else
    {
        window.alert("Please choose either Student or Tutor.");
    }
}
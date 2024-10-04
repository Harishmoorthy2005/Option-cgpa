// Retrieve the array from sessionStorage
let cgpa = JSON.parse(window.sessionStorage.getItem('cgpa')) || [];

// Function to add item to array
function addItem(value) {
    // Retrieve the array from sessionStorage again in case it was modified in another HTML file
    cgpa = JSON.parse(window.sessionStorage.getItem('cgpa')) || [];
    cgpa.push(value);
    window.sessionStorage.setItem('cgpa', JSON.stringify(cgpa));
}
//sem 1
function calculatesem1(){
   
        var sem1 = [document.getElementById("sem1-1").value,
                    document.getElementById("sem1-2").value,
                    document.getElementById("sem1-3").value,
                    document.getElementById("sem1-4").value,
                    document.getElementById("sem1-5").value,
                    document.getElementById("sem1-6").value,
                    document.getElementById("sem1-7").value];
        
        let grade=[];
        for (var i = 0; i < sem1.length; i++) {
            switch (sem1[i]) {
                case "O":
                    grade.push(10);
                    break;
                case "A+":
                    grade.push(9);
                    break;
                case "A":
                    grade.push(8);
                    break;
                case "B+":
                    grade.push(7);
                    break;
                case "B":
                    grade.push(6);
                    break;
                case "C":
                    grade.push(5);
                    break;
                default:
                    break;
            }
        }
    let res=[];
    res.push(grade[0]*4);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*3);
    res.push(grade[4]*3);
    res.push(grade[5]*2);
    res.push(grade[6]*2);
    var temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
      cgpa[0] =temp/21;
    document.getElementById("gpasem1").innerHTML="Your Gpa for Sem 1 is " +cgpa[0].toFixed(3);
    
   alert("Your CGPA upto Sem 1 is " + cgpa[0].toFixed(3));
  }

//sem 2

  function calculatesem2(){

    var sem2 =[document.getElementById("sem2-1").value,
               document.getElementById("sem2-2").value,
               document.getElementById("sem2-3").value,
               document.getElementById("sem2-4").value,
               document.getElementById("sem2-5").value,
               document.getElementById("sem2-6").value,
               document.getElementById("sem2-7").value,
               document.getElementById("sem2-8").value,
               document.getElementById("sem2-9").value];
 
    let grade=[];
   for (var i = 0; i < sem2.length; i++) {
      switch (sem2[i]) { 
       case "O":
        grade.push(10);
         break;
   case "A+":
           grade.push(9);
         break;
   case "A":
         grade.push(8);
         break;
   case "B+":
        grade.push(7);
         break;
    case "B":
        grade.push(6);
        break;
   case "C":
        grade.push(5);
        break;
   default:
    break;
}
}
    var res=[];
    res.push(grade[0]*2);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*4);
    res.push(grade[4]*3);
    res.push(grade[5]*3);
    res.push(grade[6]*2);
    res.push(grade[7]*2);
    res.push(grade[8]*1);
    let temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
       cgpa[1]=temp/24;
      
      document.getElementById("gpasem2").innerHTML="Your GPA for Sem 2 is " +cgpa[1].toFixed(3);
      var semcgpa=((cgpa[0]+cgpa[1])/2)
      alert("Your CGPA upto Sem 2 is "  +semcgpa.toFixed(2));
  }


   // sem 3

  function calculatesem3(){
    var sem3 =[document.getElementById("sem3-1").value,
    document.getElementById("sem3-2").value,
    document.getElementById("sem3-3").value,
    document.getElementById("sem3-4").value,
    document.getElementById("sem3-5").value,
    document.getElementById("sem3-6").value,
    document.getElementById("sem3-7").value,
    document.getElementById("sem3-8").value,
    document.getElementById("sem3-9").value];

let grade=[];
for (var i = 0; i < sem3.length; i++) {
switch (sem3[i]) { 
case "O":
grade.push(10);
break;
case "A+":
grade.push(9);
break;
case "A":
grade.push(8);
break;
case "B+":
grade.push(7);
break;
case "B":
grade.push(6);
break;
case "C":
grade.push(5);
break;
default:
break;
}
}
    var res=[];
    res.push(grade[0]*4);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*3);
    res.push(grade[4]*3);
    res.push(grade[5]*1.5);
    res.push(grade[6]*1.5);
    res.push(grade[7]*1.5);
    res.push(grade[8]*1);
    var temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
      var summa2=temp/22.5;
      addItem(summa2);
      document.getElementById("gpasem3").innerHTML="Your GPA for Sem 3 is " +summa2.toFixed(3);
      var result=((cgpa[0]+cgpa[1]+cgpa[2])/3)
      alert("Your CGPA upto Sem 3 is " +result.toFixed(2));
  }

/////sem 4
  function calculatesem4(){
    var sem4 =[document.getElementById("sem4-1").value,
    document.getElementById("sem4-2").value,
    document.getElementById("sem4-3").value,
    document.getElementById("sem4-4").value,
    document.getElementById("sem4-5").value,
    document.getElementById("sem4-6").value,
    document.getElementById("sem4-7").value,
    document.getElementById("sem4-8").value];

let grade=[];
for (var i = 0; i < sem4.length; i++) {
switch (sem4[i]) { 
case "O":
grade.push(10);
break;
case "A+":
grade.push(9);
break;
case "A":
grade.push(8);
break;
case "B+":
grade.push(7);
break;
case "B":
grade.push(6);
break;
case "C":
grade.push(5);
break;
default:
break;
}
}
    
    var res=[];
    res.push(grade[0]*3);
    res.push(grade[1]*4);
    res.push(grade[2]*3);
    res.push(grade[3]*4);
    res.push(grade[4]*3);
    res.push(grade[5]*2);
    res.push(grade[6]*2);
    res.push(grade[7]*2);
   
    var temp=0;
    for(i=0;i<res.length;i++){
        temp += res[i];
    }
      var summa3=temp/23;
      document.getElementById("gpasem4").innerHTML="Your GPA for Sem 4 is " + summa3.toFixed(3);
      var result=((cgpa[0]+cgpa[1]+cgpa[2]+cgpa[3])/4);
      alert("Your CGPA upto Sem 4 is "  +result.toFixed(2));
  }


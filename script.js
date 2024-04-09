function addNewLngField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('lngField');
    newNode.classList.add('mt-2');
    newNode.classList.add('w3-green');
    newNode.classList.add('w3-light-grey')
    newNode.setAttribute('placeholder','Enter here');


    let lngOb=document.getElementById('lng');
    let lngAddButtonOb=document.getElementById('lngAddButton');

    lngOb.insertBefore(newNode, lngAddButtonOb);

}

function addNewHbsField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('hbsField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');


    let hbsOb=document.getElementById('hbs');
    let hbsAddButtonOb=document.getElementById('hbsAddButton');

    hbsOb.insertBefore(newNode, hbsAddButtonOb);

}

function addNewEdField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('edField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');


    let edOb=document.getElementById('ed');
    let edAddButtonOb=document.getElementById('edAddButton');

    edOb.insertBefore(newNode, edAddButtonOb);

}

function addNewCoreField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('coreField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');


    let coreOb=document.getElementById('core');
    let coreAddButtonOb=document.getElementById('coreAddButton');

    coreOb.insertBefore(newNode, coreAddButtonOb);

}

function addNewSoftField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('softField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');


    let softOb=document.getElementById('soft');
    let softAddButtonOb=document.getElementById('softAddButton');

    softOb.insertBefore(newNode, softAddButtonOb);

}

function addNewProjectField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('projectField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');


    let projectOb=document.getElementById('project');
    let projectAddButtonOb=document.getElementById('projectAddButton');

    projectOb.insertBefore(newNode, projectAddButtonOb);

}




    function validateForm() {
        let name = document.getElementById('nameField').value.trim();
        let contact = document.getElementById('contactField').value.trim();
        let email = document.getElementById('emailField').value.trim();

        let namePattern = /^[a-zA-Z._-]+$/;
        if (!namePattern.test(name)) {
            alert('Please enter a valid name.');
            return false;
        }

        let contactPattern = /^\d{10}$/;
        if (!contactPattern.test(contact)) {
            alert('Please enter a valid contact number.');
            return false;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function generateCV() {
        if (validateForm()) {
            let nameField=document.getElementById("nameField").value;
           //let nameT1 = document.getElementById("nameT1");
    //nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById(
        "contactField"
    ).value;

    document.getElementById("dateT").innerHTML=document.getElementById(
        "dateField"
    ).value;
    
    document.getElementById("addressT").innerHTML=document.getElementById(
        "addressField"
    ).value;

    document.getElementById("genderT").innerHTML=document.getElementById(
        "genderField"
    ).value;
    document.getElementById("genderT").innerHTML=document.getElementById(
        "genderField1"
    ).value;
    
    document.getElementById("emailT").innerHTML=document.getElementById(
        "emailField"
    ).value;
    
    document.getElementById("liT").innerHTML=document.getElementById(
        "liField"
    ).value;
    
    document.getElementById("ghT").innerHTML=document.getElementById(
        "ghField"
    ).value;

    document.getElementById("objectiveT").innerHTML=document.getElementById(
        "objectiveField"
    ).value;
   
    let lngs=document.getElementsByClassName("lngField");

    let str4="";

    for(let l of lngs){
        str4 = str4 + "<li>" + l.value + "</li>";
    }
    document.getElementById("lngT").innerHTML = str4;

    let file5=document.getElementById('imgField').files[0]
    console.log(file5);
    let reader5=new FileReader();
    reader5.readAsDataURL(file5);
    console.log(reader5.result);
    reader5.onloadend=function() {
        document.getElementById('imgTemplate').src=reader5.result;
    };

    let hbss=document.getElementsByClassName("hbsField");

    let str6="";

    for(let h of hbss){
        str6 = str6 + "<li>" + h.value + "</li>";
    }
    document.getElementById("hbsT").innerHTML = str6;

    let file6=document.getElementById('imgField').files[0]
    console.log(file6);
    let reader6=new FileReader();
    reader6.readAsDataURL(file6);
    console.log(reader6.result);
    reader6.onloadend=function() {
        document.getElementById('imgTemplate').src=reader6.result;
    };





    


    let eds=document.getElementsByClassName("edField");

    let str="";

    for(let e of eds){
        str = str + "<li>" + e.value + "</li>";
    }
    document.getElementById("edT").innerHTML = str;

    let file=document.getElementById('imgField').files[0]
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function() {
        document.getElementById('imgTemplate').src=reader.result;
    };




    let cores=document.getElementsByClassName("coreField");

    let str1="";

    for(let c of cores){
        str1 = str1 + "<li>" + c.value + "</li>";
    }
    document.getElementById("cskillsT").innerHTML = str1;

    let file1=document.getElementById('imgField').files[0]
    console.log(file1);
    let reader1=new FileReader();
    reader1.readAsDataURL(file1);
    console.log(reader1.result);
    reader1.onloadend=function() {
        document.getElementById('imgTemplate').src=reader1.result;
    };


    let softs=document.getElementsByClassName("softField");

    let str2="";

    for(let s of softs){
        str2 = str2 + "<li>" + s.value + "</li>";
    }
    document.getElementById("sskillsT").innerHTML = str2;

    let file3=document.getElementById('imgField').files[0]
    console.log(file3);
    let reader2=new FileReader();
    reader2.readAsDataURL(file3);
    console.log(reader2.result);
    reader2.onloadend=function() {
        document.getElementById('imgTemplate').src=reader2.result;
    };


    let projectss=document.getElementsByClassName("projectField");

    let str3="";

    for(let p of projectss){
        str3 = str3 + "<li>" + p.value + "</li>";
    }
    document.getElementById("projectsT").innerHTML = str3;

    let file4=document.getElementById('imgField').files[0]
    console.log(file4);
    let reader3=new FileReader();
    reader3.readAsDataURL(file);
    console.log(reader3.result);
    reader3.onloadend=function() {
        document.getElementById('imgTemplate').src=reader3.result;
    };
    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
        }
    }

    function printcv()
    {
        window.print();
    }
function calculateAttendance(){

    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);

    let result = document.getElementById("result");
    let progress = document.getElementById("progress-bar");

    if(isNaN(total) || isNaN(attended)){
        result.innerHTML = "Please enter all values.";
        result.style.color="red";
        progress.style.width="0%";
        return;
    }

    if(total<=0){
        result.innerHTML="Total classes must be greater than 0.";
        result.style.color="red";
        progress.style.width="0%";
        return;
    }

    if(attended>total){
        result.innerHTML="Attended classes cannot exceed total classes.";
        result.style.color="red";
        progress.style.width="0%";
        return;
    }

    let percentage=(attended/total)*100;

    progress.style.width=percentage+"%";

    let status="";

    if(percentage>=75){

        let bunk=Math.floor((attended/0.75)-total);

        status=`
        Attendance : ${percentage.toFixed(2)}%<br><br>
        ✅ Eligible<br>
        You can miss <b>${bunk}</b> more class(es).
        `;

        progress.style.background="#16a34a";

    }else{

        let required=Math.ceil((0.75*total-attended)/0.25);

        status=`
        Attendance : ${percentage.toFixed(2)}%<br><br>
        ❌ Not Eligible<br>
        Attend next <b>${required}</b> class(es) without absence to reach 75%.
        `;

        progress.style.background="#dc2626";
    }

    result.innerHTML=status;
    result.style.color="#111827";
}

function resetFields(){

    document.getElementById("total").value="";
    document.getElementById("attended").value="";
    document.getElementById("result").innerHTML="";
    document.getElementById("progress-bar").style.width="0%";
}
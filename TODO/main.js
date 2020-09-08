var items = new Array();

document.addEventListener('click', function ( event ) {
	event.preventDefault();
  if( event.srcElement.id.toString().includes('index',0)) {
    	removeItem(parseInt(event.srcElement.id.slice(5,)));
  };
});

function Dateformat(date){
	var newdate = date.split(" ").slice(1,5);
	var mon = monthtoNumber(newdate[0].toString().toLowerCase());
	originaldate = newdate[1].toString()+"/" + mon +"/"+newdate[2].toString();
	originaldate = originaldate + " "+newdate[3].toString();
	return originaldate;
}

function addItem(){
	event.preventDefault();
	var task = document.getElementById('taskname');
	var priority = document.getElementById('priority');
	var err = document.getElementById('error');

	if(task.value=="" || priority.value=="Choose..."){
		err.innerHTML = "Please fill all details correctly";
	}
	else{
		var item = {"Task": task.value, "Priority": priority.value, 'Date': Date()};
		items.push(item);
		displayItems();
		removeItem();
		err.innerHTML = "";
		task.value="";
		priority.value="Choose...";
		closepopup();
	}
	
}

function addpopup(){
	var popupEl = document.getElementById('popup');
	var open = document.getElementById('open');
	var bdy = document.getElementById('body');
	bdy.style.opacity = 0;
	popupEl.style.display='block';
	popupEl.style.opacity=1;
	
}


function closepopup() {
	event.preventDefault();
	var bdy = document.getElementById('body');
	var popupEl = document.getElementById('popup');
	popupEl.style.display='none';
	bdy.style.opacity=1;
}


function displayItems(){
	var ulblock = document.getElementById('allitems');
	while (ulblock.firstChild) {
        ulblock.removeChild(ulblock.firstChild);
    }

	for(let i=0;i<items.length;i++){
		var li = document.createElement("li");
		li.classList.add('item');
		li.classList.add('list-group-item');

		var itemblock = document.createElement("div");
		itemblock.classList.add('row');


		//adding details
		var span1 = document.createElement("span");
		span1.classList.add('col-sm-6');
		span1.innerHTML = items[i].Task;


		var span2 = document.createElement("span");
		span2.classList.add('col-sm-3');
		span2.innerHTML = Dateformat(items[i].Date);
		


		var span3 = document.createElement("span");
		span3.classList.add('col-sm-1');
		span3.innerHTML = items[i].Priority;
		if(items[i].Priority.toLowerCase()==='low')
			span3.classList.add('bg-success');
		else if(items[i].Priority.toLowerCase()==='high')
			span3.classList.add('bg-danger');
		else
			span3.classList.add('bg-info');


		var span4 = document.createElement("span");
		span4.classList.add('col-sm-1');


		var can = document.createElement('button');
		can.classList.add('col-sm-1');
		can.classList.add('cancel');
		can.classList.add('btn');
		can.innerHTML = 'X';
		can.id = "index" + i.toString();


		itemblock.appendChild(span1);
		itemblock.appendChild(span2);
		itemblock.appendChild(span3);
		itemblock.appendChild(span4);
		itemblock.appendChild(can);


		li.appendChild(itemblock);

		ulblock.appendChild(li);


	}
}


function removeItem(id) {
	if(id>-1)
		items.splice(id, 1);
	displayItems();
}



function monthtoNumber(mon){
	var ans="";
	switch(mon){
		case "jan": 
		ans = "01";
		break;

		case "feb": 
		ans = "02";
		break;

		case "mar": 
		ans = "03";
		break;

		case "apr": 
		ans = "04";
		break;

		case "may": 
		ans = "05";
		break;

		case "jun": 
		ans = "06";
		break;

		case "july": 
		ans = "07";
		break;

		case "aug": 
		ans = "08";
		break;

		case "sep": 
		ans = "09";
		break;

		case "oct": 
		ans = "10";
		break;

		case "nov": 
		ans = "11";
		break;

		case "dec": 
		ans = "12";
		break;

		default:
		ans = mon;

	}

	return ans;
}
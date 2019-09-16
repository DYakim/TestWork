// up page --------------------

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-200);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

// portfolio filter --------------------

const listItems = document.querySelectorAll('.filter__item');
const allitem = document.querySelectorAll('.portfolio__item');

function toggleActiveClass(active){
    listItems.forEach(item => {
      item.classList.remove('filter__item_active');
    })
    active.classList.add('filter__item_active');
}

function toggleimages(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allitem.length; i++){
            allitem[i].style.display = 'block';
        }
    }else{
        for(let i = 0; i<allitem.length; i++)
            allitem[i].dataset.class === dataClass ? allitem[i].style.display = 'block' : allitem[i].style.display = 'none';
    }
}

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}

// team slider --------------------


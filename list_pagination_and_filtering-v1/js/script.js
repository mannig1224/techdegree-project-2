/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*** 
   Two global variable - Student_List will hold an array of students, and the itemsperpage holds 
   the number of students we want to display on each page.
***/

   let student_list = document.getElementsByClassName('student-item');
   let itemsPerPage = 10;

/*** 
   The showPage function gets called by the appendPageLinks. The function makes the style 
   of all the elements in the student_elements hidden. Then using the parameters passed in
   chooses which elements in the student_list to show.
***/
const showPage = (list, page) => {
   let start = (page * itemsPerPage) - itemsPerPage;
   let end = page * itemsPerPage;
   for (let i = 0; i < list.length; i += 1) {
      list[i].style.display = "none";
      if ( i >= start && i < end) {
         list[i].style.display = '';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
   
***/
const appendPageLinks = (list) => {
   const totalPages = Math.floor((list.length / 10));
   const div = document.createElement('div');
   const page = document.querySelector('.page');
   const ul = document.createElement('ul');
   const active = document.querySelectorAll('.active');
   div.className = 'pagination';

   page.appendChild(div);
   div.appendChild(ul);

   for ( let i = 0; i <= totalPages; i++) {
       const li = document.createElement('li');
       const a = document.createElement('a');
       a.textContent = i + 1;
       li.appendChild(a);
       div.appendChild(li);
       active[i].className  = '';
       a.addEventListener('click', (e) => {
         showPage(student_list, i + 1);
        
        e.target.className = 'active';
       });
      
    }
   /*
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using event.target
   */
   }
   showPage(student_list, 1);
   appendPageLinks(student_list);






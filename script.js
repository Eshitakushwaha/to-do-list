let count = 0
 
function addTask(){
    let task = document.getElementById('inp').value
    document.getElementById('inp').value=''
   
        let div = document.createElement('div')
        div.className="task"
        div.id= count
 
        let h2 = document.createElement('h2')
        h2.innerText=task
        
 
        let btn = document.createElement('button')
        btn.id="task-btn"
        btn.innerHTML="Delete"
        btn.onclick= ()=>{
            let tasks = document.getElementById('tasks')
            tasks.removeChild(document.getElementById('0'))
        }
        count++;
        div.appendChild(h2)
        div.appendChild(btn)
        document.getElementById('tasks').appendChild(div)
   
}
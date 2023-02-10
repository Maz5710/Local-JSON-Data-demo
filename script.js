function getAllStudents() {
    $.ajax({
        url: './students.json',
        type: 'GET', // Always type in CAPITAL LETTERS
        data: 'json',

        // Every Ajax needs a success and an error

        success: function (studentData) { 
            document.getElementById('results').innerHTML = '';
            let i;
            for (i = 0; i < studentData.length; i++) {
                let student = studentData[i];
                console.log(student);
                document.getElementById('results').innerHTML += `
                <div class="col-md-4 col-12 mb-3">
                        <div class="card">
                            <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">
                            <div class="card-body">
                                <h5 class="card-title"><span class="first-name">${student.first_name}</span> <span class="last-name">${student.last_name}</span></h5>
                                <p class="card-text">Id#: <span class="id-number">${student.id}</span></p>
                                <p class="card-text">Email: <span class="email">${student.email}</span></p>
                            </div>
                        </div>
                    </div>
                `
            }
        },

        error: function () {
            console.log('error calling json file');
        }
    })
}

// JQuery
$('#getBtn').click(function () {
    getAllStudents();
})

// New function to search for student by name
function searchStudentsNames() {
    $.ajax({
        url: './students.json',
        type: 'GET',
        data: 'json',
    
        success: function (studentData) {
            let results = document.getElementById('results');
            results.innerHTML = '';
            for (let i = 0; i < studentData.length; i++) {
                let student = studentData[i];
                let firstName = student.first_name.toLowerCase();
                let lastName = student.last_name.toLowerCase();

                // Get the serach input value
                let searchName = document.getElementById('nameSearch').value;
                let search = searchName.toLowerCase();
                if ((firstName.includes(search) === true) || (lastName.includes(search)) === true) {
                    results.innerHTML += `
                <div class="col-md-4 col-12 mb-3">
                <div class="card">
                    <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">
                    <div class="card-body">
                        <h5 class="card-title"><span class="first-name">${student.first_name}</span> <span class="last-name">${student.last_name}</span></h5>
                        <p class="card-text">Id#: <span class="id-number">${student.id}</span></p>
                        <p class="card-text">Email: <span class="email">${student.email}</span></p>
                    </div>
                </div>
            </div>`
                }
            }
        },
    
        error: function () {
            console.log('error - cannot filer');
        }
    })
}

$('#nameSearch').on('input', function () {
    searchStudentsNames();
})

// New function to select student by id

function dropDownSelect() {
    $.ajax({
        url: './students.json',
        type: 'GET',
        data: 'json',
    
        success: function (studentData) {
            let results = document.getElementById('results');
            results.innerHTML = '';
            let getSelection = document.getElementById('userSelection'),value;
            for (let i = 0; i < studentData.length; i++) {
                let student = studentData[i];
                let firstName = student.first_name.toLowerCase();
                let lastName = student.last_name.toLowerCase();
                let checkSelection = getSelection.toLowerCase();
                // Get the serach input value

                if (checkSelection === firstName || checkSelection === lastName) {
                results.innerHTML += `
                <div class="col-md-4 col-12 mb-3">
                <div class="card">
                    <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">
                    <div class="card-body">
                        <h5 class="card-title"><span class="first-name">${student.first_name}</span> <span class="last-name">${student.last_name}</span></h5>
                        <p class="card-text">Id#: <span class="id-number">${student.id}</span></p>
                        <p class="card-text">Email: <span class="email">${student.email}</span></p>
                    </div>
                </div>
            </div>`
                }
            }
        },
    
        error: function () {
            console.log('error - cannot find your selection');
        }
    })
}

$('#userSelection').on('ichange', function () {
    dropDownSelect();
})


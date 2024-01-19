function addRule() {
    // You can add logic here to handle the selected property, operator, and value
    // For this example, let's just log the values to the console
    var property = document.getElementById("property").value;
    var operator = document.getElementById("operator").value;
    var value = document.getElementById("value").value;

    console.log("Property: " + property);
    console.log("Operator: " + operator);
    console.log("Value: " + value);
}
function myFunction() {
    alert("Do you want to save it ?");
  }
  function myFunctionn() {
    alert("Do you want to save it ?");
  }

  
        $('.portfolio-item').isotope({
  
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

      $('.portfolio-menu ul li').click(function(){
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return false;




      });

      function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }


// Initialize Sortable for drag-and-drop functionality
const ruleList = document.getElementById('ruleList');
const sortable = new Sortable(ruleList, {
    animation: 150,
    onEnd: updateChart // Update chart when a rule is moved
});

// Chart initialization
const ctx = document.getElementById('ruleChart').getContext('2d');
let myChart;

// Function to update the chart with rule data
function updateChart() {
    const ruleLabels = [];
    const ruleData = [];

    // Loop through rule items and extract data
    ruleList.querySelectorAll('.ruleItem').forEach((item, index) => {
        ruleLabels.push(`Rule ${index + 1}`);
        ruleData.push(index * 5 + 10); // Replace with your actual data or logic
    });

    // Update or create the chart
    if (myChart) {
        myChart.data.labels = ruleLabels;
        myChart.data.datasets[0].data = ruleData;
        myChart.update();
    } else {
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ruleLabels,
                datasets: [{
                    label: 'Rule Builder Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: ruleData,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Add initial rule items (you can add more or remove as needed)
const initialRules = ['Condition 1', 'Condition 2', 'Condition 3'];
initialRules.forEach(rule => addRule(rule));

// Function to add a new rule item
function addRule(ruleText) {
    const ruleItem = document.createElement('li');
    ruleItem.className = 'ruleItem';
    ruleItem.textContent = ruleText;
    ruleItem.addEventListener('click', () => openRuleEditor(ruleText));
    ruleList.appendChild(ruleItem);
    updateChart(); // Update chart when a new rule is added
}

// Function to open the rule editor
function openRuleEditor(ruleText) {
    document.getElementById('editRuleInput').value = ruleText;
    document.getElementById('ruleEditor').style.display = 'block';
}

// Function to update the rule
function updateRule() {
    const editedRule = document.getElementById('editRuleInput').value;
    const selectedRuleItem = ruleList.querySelector('.ruleItem.selected');
    
    if (selectedRuleItem) {
        selectedRuleItem.textContent = editedRule;
        updateChart(); // Update chart after rule edit
    }

    // Close the rule editor
    closeRuleEditor();
}

// Function to close the rule editor
function closeRuleEditor() {
    document.getElementById('editRuleInput').value = '';
    document.getElementById('ruleEditor').style.display = 'none';
}
function addRule() {
  // Clone the existing rule box
  var ruleBox = document.getElementById('ruleBox').cloneNode(true);

  // Clear the input values in the cloned rule box
  var inputs = ruleBox.querySelectorAll('input');
  inputs.forEach(function (input) {
      input.value = '';
  });

  // Append the cloned rule box to the rule builder
  document.getElementById('ruleBox').parentNode.appendChild(ruleBox);
}
   
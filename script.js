const patient = {
  name: "Jessica Taylor",
  age: 28,
  blood_pressure: "120/80",
  heart_rate: 72
};

// Fill UI
document.getElementById("name").innerText = patient.name;
document.getElementById("age").innerText = "Age: " + patient.age;
document.getElementById("bp").innerText = patient.blood_pressure;
document.getElementById("hr").innerText = patient.heart_rate;

// Chart
const ctx = document.getElementById("bpChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Systolic",
        data: [120, 125, 130, 128]
      },
      {
        label: "Diastolic",
        data: [80, 82, 85, 83]
      }
    ]
  }
});
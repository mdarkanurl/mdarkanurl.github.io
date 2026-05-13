class Doctor {
  name: string;
  avgConsultTime: number;
  availableAt: number;

  constructor(name: string, avgConsultTime: number) {
    this.name = name;
    this.avgConsultTime = avgConsultTime;
    this.availableAt = 0;
  }
  reset() { this.availableAt = 0; }
}

function calculateWaitingTime(doctors: Doctor[], patientPosition: number) {
  doctors.forEach(d => d.reset());
  const patientsAhead = patientPosition - 1;

  for (let i = 0; i <= patientsAhead; i++) {
    const earliest = doctors.reduce((a, b) =>
      a.availableAt <= b.availableAt ? a : b
    );
    console.log("earliest", earliest);
    earliest.availableAt += earliest.avgConsultTime;
    console.log("earliest", earliest);
  }

  return Math.min(...doctors.map(d => d.availableAt));
}

const doctors = [
  new Doctor("Doctor A", 3),
  new Doctor("Doctor B", 4),
];

console.log(calculateWaitingTime(doctors, 11));

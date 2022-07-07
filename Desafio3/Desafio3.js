function buildRow(row, name, fs, ss, at) {
  let tableRow = document.createElement("div");
  tableRow.classList.add("table-row");
  let approvedObject = approved(fs, ss, at);
  let pColumn = setupPositionColumn(row);
  let nColumn = setupNameColumn(name);
  let fColumn = setupFSemesterColumn(fs);
  let sColumn = setupSSemesterColumn(ss);
  let gColumn = setupFGradeColumn(approvedObject.finalGrade);
  let aColumn = setupAttendaceColumn(at);

  if (approvedObject.approved) tableRow.classList.add("approved");
  else tableRow.classList.add("reproved");

  tableRow.appendChild(pColumn);
  tableRow.appendChild(nColumn);
  tableRow.appendChild(fColumn);
  tableRow.appendChild(sColumn);
  tableRow.appendChild(gColumn);
  tableRow.appendChild(aColumn);
  return tableRow;
}

function approved(fs, ss, at) {
  let _finalGrade = (fs + ss) / 2;
  at = at.toFixed(2);
  return {
    approved: _finalGrade >= 6 && at >= 60,
    finalGrade: _finalGrade,
  };
}

function setupPositionColumn(row) {
  let positionColumn = document.createElement("div");
  positionColumn.innerText = row;
  positionColumn.classList.add("position-column");
  positionColumn.classList.add("bold-font");
  positionColumn.classList.add("aligned");
  return positionColumn;
}
function setupNameColumn(name) {
  let nameColumn = document.createElement("div");
  nameColumn.innerText = name;
  nameColumn.classList.add("name-column");
  nameColumn.classList.add("capitalize");
  nameColumn.classList.add("bold-font");
  nameColumn.classList.add("aligned");
  return nameColumn;
}
function setupFSemesterColumn(fs) {
  let fSemesterColumn = document.createElement("div");
  fSemesterColumn.innerText = fs.toFixed(2);
  fSemesterColumn.classList.add("first-semester-column");
  fSemesterColumn.classList.add("bold-font");
  fSemesterColumn.classList.add("aligned");
  return fSemesterColumn;
}
function setupSSemesterColumn(ss) {
  let sSemesterColumn = document.createElement("div");
  sSemesterColumn.innerText = ss.toFixed(2);
  sSemesterColumn.classList.add("second-semester-column");
  sSemesterColumn.classList.add("bold-font");
  sSemesterColumn.classList.add("aligned");
  return sSemesterColumn;
}
function setupFGradeColumn(fg) {
  let fGradeColumn = document.createElement("div");
  fGradeColumn.innerText = fg.toFixed(2);
  fGradeColumn.classList.add("final-grade-column");
  fGradeColumn.classList.add("bold-font");
  fGradeColumn.classList.add("aligned");
  return fGradeColumn;
}
function setupAttendaceColumn(at) {
  let attendaceColumn = document.createElement("div");
  attendaceColumn.innerText = at.toFixed(2) + " %";
  attendaceColumn.classList.add("attendace-column");
  attendaceColumn.classList.add("bold-font");
  attendaceColumn.classList.add("aligned");
  return attendaceColumn;
}

function init() {
  let continueAsking = true;
  let container = document.querySelector("#container");
  let actualRow = 1;
  let rows = [];
  alert("Vamos comecar?");
  while (continueAsking) {
    let name = prompt("Digite o nome do aluno: ", "Nome do aluno");

    let fs = parseFloat(
      prompt("Digite a nota do primeiro semestre do aluno: ", "Nota do aluno")
    );
    let ss = parseFloat(
      prompt("Digite a nota do segundo semestre do aluno: ", "Nota do aluno")
    );

    let at = parseFloat(
      prompt("Digite a frequencia aluno: ", "Frequencia do aluno")
    );

    if (isNaN(ss) || isNaN(fs) || isNaN(at)) {
      alert("Voce inseriu um dado invalido!");
      let restart = confirm("Deseja recomeçar?");
      if (restart) continue;
      else {
        continueAsking = false;
        break;
      }
    }
    rows.push(buildRow(actualRow, name, fs, ss, at));
    actualRow++;
    continueAsking = confirm("Deseja adicionar mais alunos?");
  }
  rows.forEach((row) => container.appendChild(row));
}

window.onload = init;

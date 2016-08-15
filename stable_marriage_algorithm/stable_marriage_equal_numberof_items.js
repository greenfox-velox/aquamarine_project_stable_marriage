function createOneItemList(identifier) {
  return [ { name: identifier } ];
}

function createTwoItemsList(identifier, list) {
  return [ { name: identifier, preferenceList: list } ];
}

function createIndexedItems(identifier, indexValue) {
  return [ { name: identifier, index: indexValue } ];
}

function createFourItemsList(company, companyIndex, student, studentIndex) {
  return [ { companyName: company, companyPreferenceAt: companyIndex, studentName: student, studentPreferenceAt: studentIndex } ];
}

var unengagedCompanies = [];
var companies = [];
var students = [];
var engagements = [];
var nextCandidateIndex = [];

companies.push(createTwoItemsList('Allatkert', ['Juli', 'Pista', 'Kati']));
companies.push(createTwoItemsList('Vidampark', ['Juli', 'Kati', 'Pista']));
companies.push(createTwoItemsList('Cirkusz', ['Kati', 'Pista', 'Juli']));

students.push(createTwoItemsList('Juli', ['Vidampark', 'Allatkert', 'Cirkusz']));
students.push(createTwoItemsList('Kati', ['Vidampark', 'Cirkusz', 'Allatkert']));
students.push(createTwoItemsList('Pista', ['Allatkert', 'Cirkusz', 'Vidampark']));

// ***************create lists****************************

function createUnengagedCompanies() {
  for (var i = 0; i < companies.length; ++i) {
    unengagedCompanies.push(createOneItemList(companies[i][0].name));
  }
  return unengagedCompanies;
};

createUnengagedCompanies();

function createNextCandidateIndex() {
  for (var i = 0; i < companies.length; ++i) {
    nextCandidateIndex.push(createIndexedItems(companies[i][0].name, 0));
  }
  return nextCandidateIndex;
};

createNextCandidateIndex();

// ********************************************************

function isUnengagedCompanyLeft() {
  return unengagedCompanies.length > 0;
}

function getCurrentUnengagedCompany() {
  var companyName = unengagedCompanies[0][0].name;
  unengagedCompanies.shift();
  return companyName;
}

function getCurrentCandidateIndex(companyName) {
  var currentCandidateIndex = -1;
  for (var i = 0; i < nextCandidateIndex.length; ++i) {
    if (nextCandidateIndex[i][0].name = companyName) {
      currentCandidateIndex = nextCandidateIndex[i][0].index;
      break;
    }
  }
  return currentCandidateIndex;
}

function incrementCurrentCandidateIndex(companyName) {
  for (var i = 0; i < nextCandidateIndex.length; ++i) {
    if (nextCandidateIndex[i][0].name == companyName) {
      ++nextCandidateIndex[i][0].index;
      break;
    }
  }
};

function getCurrentCandidate(companyName) {
  var currentCandidate = 'Undefined';
  var currentCandidateIndex = getCurrentCandidateIndex(companyName);
  for (var i = 0; i < companies.length; ++i) {
    if (companies[i][0].name == companyName) {
      currentCandidate = companies[i][0].preferenceList[currentCandidateIndex];
      break;
    }
  }
  return currentCandidate;
}

function getStudentPrefersCompanyAtIndex(companyName) {
  var studentPrefersCompanyAtIndex = -1;
  var student = getCurrentCandidate(companyName);
  for (var i = 0; i < students.length; ++i) {
    if (students[i][0].name == student) {
      studentPrefersCompanyAtIndex = students[i][0].preferenceList.indexOf(companyName);
      break;
    }
  }
  return studentPrefersCompanyAtIndex;
}

function isStudentEngaged(student) {
  for (var i = 0; i < engagements.length; ++i) {
    if (engagements[i][0].studentName == student) {
      return true;
    } else {
      return false;
    }
  }
}

function getMarriedStudentIndex(student) {
  var studentPreferenceAt = -1;
  for (var i = 0; i < engagements.length; ++i) {
    if (engagements[i][0].studentName == student) {
      studentPreferenceAt = engagements[i][0].studentPreferenceAt;
      break;
    }
  }
  return studentPreferenceAt;
}

function setCompanyBackOnMarket(companyName) {
  unengagedCompanies.push(createOneItemList(companyName));
  incrementCurrentCandidateIndex(companyName);
}

function reEngage(newCompanyName, companyPreferenceAt, currentCandidate, studentPreferenceAt) {
  for (var i = 0; i < engagements.length; ++i) {
    if (engagements[i][0].studentName == currentCandidate) {
      setCompanyBackOnMarket(engagements[i][0].companyName);
      engagements[i][0].companyName = newCompanyName;
      engagements[i][0].companyPreferenceAt = companyPreferenceAt;
      engagements[i][0].studentPreferenceAt = studentPreferenceAt;
      break;
    }
  }
}

function engage(companyName, companyPreferenceAt, currentCandidate, studentPreferenceAt) {
  if (isStudentEngaged(currentCandidate)) {
    var marriedStudentIndex = getMarriedStudentIndex(currentCandidate);
    if (marriedStudentIndex > studentPreferenceAt) {
      reEngage(companyName, companyPreferenceAt, currentCandidate, studentPreferenceAt)
    } else {
      setCompanyBackOnMarket(companyName)
    }
  } else {
    engagements.push(createFourItemsList(companyName, companyPreferenceAt, currentCandidate, studentPreferenceAt))
  }
}
// ********************************************************

function solve() {
  while (isUnengagedCompanyLeft()) {
    var companyName = getCurrentUnengagedCompany();
    var companyPreferenceAt = getCurrentCandidateIndex(companyName);
    var currentCandidate = getCurrentCandidate(companyName);
    var studentPreferenceAt = getStudentPrefersCompanyAtIndex(companyName)
    engage(companyName, companyPreferenceAt, currentCandidate, studentPreferenceAt)
    console.log('***********************************************');
    for (var i = 0; i < engagements.length; ++i) {
      console.log(engagements[i][0]);
    }
  }
}

solve();

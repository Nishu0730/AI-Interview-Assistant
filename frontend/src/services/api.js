const BASE_URL = "http://127.0.0.1:8000";

export async function uploadResume(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/resume/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
}

export async function generateInterview(role, skills) {
  const response = await fetch(`${BASE_URL}/interview/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      role,
      skills,
    }),
  });

  return response.json();
}

export async function saveAnswer(data) {
  const response = await fetch(`${BASE_URL}/interview/save_answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function evaluateInterview(data) {
  const response = await fetch(`${BASE_URL}/interview/evaluate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
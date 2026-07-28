def build_query(role, skills):
    return (
        f"Generate interview questions for a {role} "
        f"having skills in {', '.join(skills)}."
    )
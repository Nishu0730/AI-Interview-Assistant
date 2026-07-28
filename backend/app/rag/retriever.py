from sentence_transformers import SentenceTransformer

from app.rag.vector_store import VectorStore

model = SentenceTransformer("all-MiniLM-L6-v2")


def embed_query(query):
    return model.encode(query)


def retrieve_context(query):
    vector_db = VectorStore()

    query_embedding = embed_query(query)

    results = vector_db.search(query_embedding)

    return "\n\n".join(results)
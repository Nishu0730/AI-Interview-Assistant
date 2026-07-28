from sentence_transformers import SentenceTransformer
from app.rag.vector_store import VectorStore

_model = None

def get_model():
    global _model
    if _model is None:
        _model = SentenceTransformer("all-MiniLM-L6-v2")
    return _model


def embed_query(query):
    model = get_model()
    return model.encode(query)


def retrieve(query, top_k=5):
    query_embedding = embed_query(query)
    return VectorStore.search(query_embedding, top_k)
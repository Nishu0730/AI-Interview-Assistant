from app.rag.pdf_loader import load_pdf
from app.rag.chunker import chunk_text
from app.rag.embeddings import create_embeddings
from app.rag.vector_store import VectorStore
from app.rag.retriever import embed_query
from app.rag.query_builder import build_query

# Load book
pdf_path = "app/knowledge_base/books/ml_book.pdf"

text = load_pdf(pdf_path)

# Chunk
chunks = chunk_text(text)

# Embeddings
embeddings = create_embeddings(chunks)

# Build FAISS
vector_db = VectorStore()

vector_db.build(embeddings, chunks)

# Candidate data
role = "AI/ML Engineer"

skills = [
    "Python",
    "FastAPI",
    "Machine Learning",
    "SQL"
]

# Build query
query = build_query(role, skills)

print("\nQuery:\n")
print(query)

# Search
query_embedding = embed_query(query)

results = vector_db.search(query_embedding)

print("\nRetrieved Context:\n")

for i, chunk in enumerate(results, start=1):
    print(f"\nChunk {i}\n")
    print(chunk[:700])
    print("=" * 100)
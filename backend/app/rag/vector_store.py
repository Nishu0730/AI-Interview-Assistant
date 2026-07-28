import faiss
import numpy as np
import pickle
import os


class VectorStore:

    INDEX_FILE = "app/rag/faiss.index"
    CHUNKS_FILE = "app/rag/chunks.pkl"

    def __init__(self):
        self.index = None
        self.chunks = []

        if os.path.exists(self.INDEX_FILE):
            self.index = faiss.read_index(self.INDEX_FILE)

        if os.path.exists(self.CHUNKS_FILE):
            with open(self.CHUNKS_FILE, "rb") as f:
                self.chunks = pickle.load(f)

    def build(self, embeddings, chunks):

        dimension = embeddings.shape[1]

        self.index = faiss.IndexFlatL2(dimension)

        self.index.add(np.array(embeddings).astype("float32"))

        self.chunks = chunks

        faiss.write_index(self.index, self.INDEX_FILE)

        with open(self.CHUNKS_FILE, "wb") as f:
            pickle.dump(chunks, f)

    def search(self, embedding, k=3):

        distances, indices = self.index.search(
            np.array([embedding]).astype("float32"),
            k
        )

        return [self.chunks[i] for i in indices[0]]
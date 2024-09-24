package repository;

import entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Repositório para a entidade Categoria.
 * Extende JpaRepository, fornecendo operações CRUD e consultas adicionais.
 */
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    /**
     * Consulta que busca uma Categoria por ID e carrega também os produtos associados
     * usando a estratégia JOIN FETCH. Isso evita a LazyInitializationException ao
     * acessar a lista de produtos fora do escopo da sessão de persistência.
     *
     * @param id O identificador da categoria a ser buscada.
     * @return A categoria com seus produtos já carregados.
     */
    @Query("SELECT c FROM Categoria c JOIN FETCH c.produtos WHERE c.id = :id")
    Categoria findCategoriaComProdutos(@Param("id") Long id);
}

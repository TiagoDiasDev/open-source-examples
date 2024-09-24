package entity;

import jakarta.persistence.*;
import model.Produto;
import java.util.List;

/**
 * A entidade Categoria representa uma categoria de produtos.
 * Esta classe é mapeada para a tabela 'Categoria' no banco de dados usando JPA.
 */
@Entity
public class Categoria {

    /**
     * O identificador único da categoria.
     * É gerado automaticamente pelo banco de dados com a estratégia de incremento.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * O nome da categoria.
     * Este campo será mapeado para uma coluna no banco de dados.
     */
    private String nome;

    /**
     * Lista de produtos associados a esta categoria.
     * A relação é de um-para-muitos, onde uma categoria pode ter vários produtos.
     * A relação é mapeada no lado da entidade Produto, usando o atributo 'categoria'.
     * O carregamento é feito de forma preguiçosa (LAZY) e as operações são propagadas
     * para os produtos associados através de 'CascadeType.ALL'.
     */
    @OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Produto> produtos;

    /**
     * Retorna o identificador único da categoria.
     *
     * @return id da categoria
     */
    public Long getId() {
        return id;
    }

    /**
     * Define o identificador único da categoria.
     *
     * @param id O novo identificador da categoria
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Retorna o nome da categoria.
     *
     * @return nome da categoria
     */
    public String getNome() {
        return nome;
    }

    /**
     * Define o nome da categoria.
     *
     * @param nome O novo nome da categoria
     */
    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * Retorna a lista de produtos associados a esta categoria.
     * O carregamento da lista é feito de forma preguiçosa (LAZY).
     *
     * @return Lista de produtos
     */
    public List<Produto> getProdutos() {
        return produtos;
    }

    /**
     * Define a lista de produtos associados a esta categoria.
     *
     * @param produtos A nova lista de produtos a ser associada à categoria
     */
    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}


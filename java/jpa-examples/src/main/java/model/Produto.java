package model;

import entity.Categoria;
import jakarta.persistence.*;

/**
 * A entidade Produto representa um item que pertence a uma categoria.
 * Esta classe é mapeada para a tabela 'Produto' no banco de dados usando JPA.
 */
@Entity
public class Produto {

    /**
     * O identificador único do produto.
     * É gerado automaticamente pelo banco de dados com a estratégia de incremento.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * O nome do produto.
     * Este campo será mapeado para uma coluna no banco de dados.
     */
    private String nome;

    /**
     * A categoria à qual o produto pertence.
     * Relação Many-to-One, onde vários produtos podem pertencer a uma única categoria.
     * O carregamento da categoria é feito de forma preguiçosa (LAZY) para otimizar o uso de memória.
     * A chave estrangeira para categoria é definida pela coluna 'categoria_id'.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    /**
     * Retorna o identificador único do produto.
     *
     * @return id do produto
     */
    public Long getId() {
        return id;
    }

    /**
     * Define o identificador único do produto.
     *
     * @param id O novo identificador do produto
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Retorna o nome do produto.
     *
     * @return nome do produto
     */
    public String getNome() {
        return nome;
    }

    /**
     * Define o nome do produto.
     *
     * @param nome O novo nome do produto
     */
    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * Retorna a categoria à qual o produto pertence.
     * O carregamento da categoria é feito de forma preguiçosa (LAZY).
     *
     * @return A categoria associada ao produto
     */
    public Categoria getCategoria() {
        return categoria;
    }

    /**
     * Define a categoria à qual o produto pertence.
     *
     * @param categoria A nova categoria a ser associada ao produto
     */
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}

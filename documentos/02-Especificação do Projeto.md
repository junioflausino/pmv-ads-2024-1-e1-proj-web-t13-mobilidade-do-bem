# Especificação do Projeto

## Perfis de Usuários

<table border="1">
    <thead>
        <tr>
            <th>Perfil</th>
            <th>Descrição</th>
            <th>Necessidades</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Perfil 01 – Estou precisando</td>
            <td>Pessoa física ou jurídica</td>
            <td>
                <ul>
                    <li>Acesso fácil e seguro a informações como contato de doadores de equipamentos de auxílio a mobilidade;</li>
                    <li>Acesso a variedade de equipamentos de auxílio a mobilidade;</li>
                    <li>Conseguir o equipamento de auxílio a mobilidade de maneira gratuita.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Perfil 02 – Estou emprestando</td>
            <td>Pessoa física ou jurídica</td>
            <td>
                <ul>
                    <li>Que esteja emprestando equipamentos</li>
                    <li>Acesso a uma plataforma para disponibilizar equipamentos de auxílio à mobilidade que está disponível;</li>
                    <li>Acesso seguro a pessoas ou instituições que necessitam dos equipamentos de auxílio a mobilidade.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Perfil 03 – Estou doando</td>
            <td>Pessoa física ou jurídica</td>
            <td>
                <ul>
                    <li>Que esteja doando equipamento</li>
                    <li>Acesso a uma plataforma para disponibilizar equipamentos de auxílio à mobilidade</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



## Histórias de Usuários

<table border="1">
    <thead>
        <tr>
            <th>QUEM</th>
            <th>O QUE</th>
            <th>PORQUE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pessoa Física</td>
            <td>Encontrar equipamentos de auxílio a mobilidade</td>
            <td>Por necessidade de locomoção</td>
        </tr>
        <tr>
            <td>Pessoa Física</td>
            <td>Saber a localização do aparelho auxiliar de mobilidade disponível para doação ou locação</td>
            <td>Verificar a viabilidade de transporte do aparelho</td>
        </tr>
        <tr>
            <td>Pessoa Física</td>
            <td>Ser notificado quando um novo aparelho de mobilidade é disponibilizado</td>
            <td>Aumentar minhas chances de conseguir o aparelho</td>
        </tr>
        <tr>
            <td>Pessoa Física</td>
            <td>Ter acesso ao contato dos detentores de aparelhos de mobilidade disponíveis para doação ou empréstimo</td>
            <td>Manter contato com o possível doador do aparelho</td>
        </tr>
        <tr>
            <td>Pessoa Jurídica/Física (Doação)</td>
            <td>Conseguir doar equipamentos para pessoas com necessidade</td>
            <td>Ajudar pessoas com necessidade</td>
        </tr>
        <tr>
            <td>Pessoa Jurídica/Física (Doação)</td>
            <td>Cadastrar os aparelhos de mobilidade disponíveis para doação</td>
            <td>Disponibilizar publicamente os aparelhos</td>
        </tr>
        <tr>
            <td>Pessoa Jurídica (Empréstimo)</td>
            <td>Conseguir realizar empréstimo de equipamentos para pessoas com necessidade</td>
            <td>Não deixar equipamentos parados que poderiam ser utilizados por pessoas com necessidade</td>
        </tr>
        <tr>
            <td>Pessoa Jurídica (Empréstimo)</td>
            <td>Cadastrar os aparelhos de mobilidade disponíveis para empréstimo</td>
            <td>Disponibilizar publicamente os aparelhos</td>
        </tr>
    </tbody>
</table>


## Requisitos do Projeto

### Requisitos Funcionais

<table border="1">
    <thead>
        <tr>
            <th>Requisito Funcional (RF)</th>
            <th>Descrição</th>
            <th>Prioridade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RF-01</td>
            <td>A aplicação deve permitir ao usuário cadastrar uma conta</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RF-02</td>
            <td>A aplicação deve permitir ao usuário fazer o login da sua conta</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RF-03</td>
            <td>A aplicação deve permitir a diferenciação entre perfis de pessoas físicas candidatas a empréstimo ou doação, pessoas físicas e jurídicas doadoras e pessoas jurídicas que irão emprestar</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RF-04</td>
            <td>A aplicação deve permitir o cadastro dos aparelhos de mobilidade</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RF-05</td>
            <td>Deve permitir ao usuário adquirir o equipamento desejado</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RF-06</td>
            <td>A aplicação deve ter uma área que mostra diversos equipamentos próximos</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RF-07</td>
            <td>A aplicação deve permitir a reserva de equipamentos</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RF-08</td>
            <td>A aplicação deve exibir um campo de busca para procura do produto</td>
            <td>MÉDIA</td>
        </tr>
        <tr>
            <td>RF-09</td>
            <td>A aplicação deve permitir o contato entre doares, emprestadores e pessoas que buscam aparelhos de auxílio à mobilidade</td>
            <td>ALTO</td>
        </tr>
        <tr>
            <td>RF-10</td>
            <td>A aplicação deve permitir a notificação dos usuários de novos produtos disponibilizados no site</td>
            <td>BAIXO</td>
        </tr>
    </tbody>
</table>


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

<table border="1">
    <thead>
        <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Prioridade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RNF-01</td>
            <td>Site compatível com diversos navegadores</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RNF-02</td>
            <td>O site deve estar disponível para acesso pela internet</td>
            <td>ALTA</td>
        </tr>
        <tr>
            <td>RNF-03</td>
            <td>O site deve ser capaz de obter a localização do usuário para encontrar fornecedores próximos</td>
            <td>MÉDIA</td>
        </tr>
        <tr>
            <td>RNF-04</td>
            <td>O site deve ser responsivo, adaptando-se à diversas telas</td>
            <td>MÉDIA</td>
        </tr>
        <tr>
            <td>RNF-05</td>
            <td>O site deve possuir interface intuitiva</td>
            <td>MÉDIA</td>
        </tr>
    </tbody>
</table>

**Prioridade: Alta / Média / Baixa. 


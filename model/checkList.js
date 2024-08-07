const connection = require("../connection.js");

class CheckList {

  static async adicionaVeiculoTraseira(dados) {
        const conn = await connection();
        const texto = `insert into veiculo_traseira(lacrePlaca, carroceria, kitGnv, gravacaoParabrisaTraseiro, assoalhoPortaMalas,
                            chaveRodas, encostoCabecaAssentosTraseiro, escapamento, lanternaTraseiraDireito, lanternaTraseiraEsquerdo,
                            limpadorVidroTraseiro, macaco,parachoqueTraseiro, bauCacamba, placaTraseira, pneuRodaEstepe, portaMalas,
                            vidroTraseiro) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const traseira = [dados.lacrePlaca, dados.carroceria, dados.kitGnv, dados.gravacaoParabrisaTraseiro, dados.assoalhoPortaMalas,
                dados.chaveRodas, dados.encostoCabecaAssentosTraseiro, dados.escapamento, dados.lanternaTraseiraDireito, dados.lanternaTraseiraEsquerdo,
                dados.limpadorVidroTraseiro, dados.macaco, dados.parachoqueTraseiro, dados.bauCacamba, dados.placaTraseira, dados.pneuRodaEstepe, dados.portaMalas,
                dados.vidroTraseiro];
        const [veiculoTraseira] = await conn.query(texto,traseira, traseira);

        return veiculoTraseira;

    }
 static async criarTabela() {
        try{
            const conn = await connection();
            const veiculoTraseira = `create table if not exists veiculo_traseira (
                                            id integer not null primary key auto_increment,
                                            lacrePlaca varchar(255),
                                            carroceria varchar(255),
                                            kitGnv varchar(255),
                                            gravacaoParabrisaTraseiro varchar(255),
                                            assoalhoPortaMalas varchar(255),
                                            chaveRodas varchar(255),
                                            encostoCabecaAssentosTraseiro varchar(255),
                                            escapamento varchar(255),
                                            lanternaTraseiraDireito varchar(255),
                                            lanternaTraseiraEsquerdo varchar(255),
                                            limpadorVidroTraseiro varchar(255),
                                            macaco varchar(255),
                                            parachoqueTraseiro varchar(255),
                                            bauCacamba varchar(255),
                                            placaTraseira varchar(255),
                                            pneuRodaEstepe varchar(255),
                                            portaMalas varchar(255),
                                            vidroTraseiro varchar(255)
                                            )`;
            await conn.query(veiculoTraseira);

            const veiculoLadoEsquerdo = `create table if not exists veiculo_lado_esquerdo (
                                            id integer not null primary key auto_increment,
                                            pneusDianteiroEsquerdo varchar(255),
                                            pneusTraseiroEsquerdo varchar(255),
                                            coluna varchar(255),
                                            gravacaoVidroTraseiroEsquerdo varchar(255),
                                            caixaAr varchar(255),
                                            colunaTraseiraEsquerda varchar(255),
                                            gravacaoVidroDianteiroEsquerdo varchar(255),
                                            colunaCentralEsquerda varchar(255),
                                            lateralTraseiraEsquerda varchar(255),
                                            espelhoRetrovisorEsquerdo varchar(255),
                                            paralamaDianteiroEsquerdo varchar(255),
                                            portaDianteiraEsquerda varchar(255),
                                            portaTraseiraEsquerda varchar(255),
                                            vidroVigiaEsquerdo varchar(255),
                                            vidroDianteiroEsquerdo varchar(255),
                                            vidroTraseiroEsquerdo varchar(255),
                                            caixaRoda varchar(255)
                                            )`;
            await conn.query(veiculoLadoEsquerdo);
            
            const veiculoDianteira = `create table if not exists veiculo_dianteira(
                                            id integer not null primary key auto_increment,
                                            gravacaoParabrisaDianteiro varchar(255),
                                            etiquetaEtaMotor varchar(255),
                                            capo varchar(255),
                                            farolAltoDianteiroDireito varchar(255),
                                            farolAltoDianteiroEsquerdo varchar(255),
                                            farolNeblinaDireito varchar(255),
                                            farolNeblinaEsquerdo varchar(255),
                                            funilaria varchar(255),
                                            limpadorParaBrisaDianteiro varchar(255),
                                            bateria varchar(255),
                                            paraChoqueDianterDianteiro varchar(255),
                                            placaDianteira varchar(255),
                                            veiculoLiga varchar(255),
                                            compartimentoMotor varchar(255),
                                            lanternaDianteiraDireito varchar(255),
                                            lanternaDianteiraEsquerdo varchar(255),
                                            parabrisaDianteiro varchar(255),
                                            longarina varchar(255)
                                            )`;

          await conn.query(veiculoDianteira);
          
          const veiculoLadoDireito = `create table if not exists veiculo_lado_direito (
                                            id integer not null primary key auto_increment,
                                            etiquetaEtaColuna varchar(255),
                                            gravacaoVidroDianteiroDireito varchar(255),
                                            etiquetaEtaAssoalho varchar(255),
                                            gravacaoVidroTraseiroDireito varchar(255),
                                            pneusDianteiroDireito varchar(255),
                                            pneusTraseiroDireito varchar(255),
                                            caixaArD varchar(255),
                                            colunaDianteiraDireita varchar(255),
                                            colunaCentralDireito varchar(255),
                                            colunaTraseiraDireita varchar(255),
                                            lateralTraseiraDireito varchar(255),
                                            revestimentoInternoLaterais varchar(255),
                                            espelhoRetrovisorDireito varchar(255),
                                            paralamaDianteiroDireito varchar(255),
                                            portaDianteiraDireita varchar(255),
                                            portaTraseiraDireita varchar(255),
                                            calotaEstado varchar(255),
                                            tipoEstofado varchar(255),
                                            tipoRoda varchar(255),
                                            vidroVigiaDireito varchar(255),
                                            vidroDianteiroDireito varchar(255),
                                            vidrosEletricosDianteiro varchar(255),
                                            vidrosTraseiroDianteiro varchar(255),
                                            caixaRodaDireita varchar(255),
                                            espelhoRetrovisorInterno varchar(255)
                                            )`;
            await conn.query(veiculoLadoDireito);

            const veiculoAgregados = `create table if not exists veiculo_agregados(
                                            id integer not null primary key auto_increment,
                                            numeroChassi varchar(255),
                                            numeroMotor varchar(255),
                                            numeroCambio varchar(255),
                                            assoalhoCentral varchar(255),
                                            cambioEngata varchar(255),
                                            teto varchar(255),
                                            danoEstruturalTeto varchar(255),
                                            suspeitaAulteracao varchar(255),
                                            veiculoModificado varchar(255),
                                            chassiRemarcado varchar(255),
                                            plaquetaAnoFabricacao varchar(255)
                                            )`;

            await conn.query(veiculoAgregados);

            const veiculoAcessorios = `create table if not exists veiculo_acessorios(
                                            id integer not null primary key auto_increment,
                                            arCondicionado varchar(255),
                                            direcaoHidrMecAssistida varchar(255),
                                            freiosABS varchar(255),
                                            radioCDMP3 varchar(255),
                                            travasEletricas varchar(255),
                                            vidrosEletricos varchar(255),
                                            airBag varchar(255),
                                            paraSol varchar(255)
                                            )`;

            await conn.query(veiculoAcessorios);

            const checkList = `create table if not exists check_list(
                                            id integer not null primary key,
                                            idCliente integer not null,
                                            idVeiculo integer not null,
                                            idVeiculoTraseira integer not null,
                                            idVeiculoLadoEsquerdo integer not null, 
                                            idVeiculoDianteira integer not null,
                                            idVeiculoLadoDireito integer not null,
                                            idVeiculoAgregados integer not null,
                                            idVeiculoAcessorios integer not null,
                                            comentario1 varchar(255), 
                                            comentario2 varchar(255),
                                            comentario3 varchar(255),
                                            numeroMotor varchar(255),
                                            estruturaAssoalho varchar(255),
                                            condicoesNumeroMotor varchar(255),
                                            condicoesNumeroChassi varchar(255),
                                            observacao text,
                                            data date not null,
                                            foreign key (idCliente) references cliente (id),
                                            foreign key (idVeiculo) references veiculo (id),
                                            foreign key (idVeiculoTraseira) references veiculo_traseira (id),
                                            foreign key (idVeiculoLadoEsquerdo) references veiculo_lado_esquerdo (id),
                                            foreign key (idVeiculoDianteira) references veiculo_dianteira (id),
                                            foreign key (idVeiculoLadoDireito) references veiculo_lado_direito (id),
                                            foreign key (idVeiculoAgregados) references veiculo_agregados (id),
                                            foreign key (idVeiculoAcessorios) references veiculo_acessorios (id) 
                                            );`;
            await conn.query(checkList);

        }catch(erro) {
            console.log(erro.message);
        }
    }
}


module.exports = CheckList;


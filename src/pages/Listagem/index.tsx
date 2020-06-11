import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

import Header from '../../components/Header';

const Listagem: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <div className="content">
                    <h1>Listagem</h1>

                    <div className="div-pesquisar">
                        <input 
                            type="text"
                            placeholder="Pesquisar"
                        />
                        <button>
                            <FiSearch />
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Listagem;
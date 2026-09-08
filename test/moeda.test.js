import { describe, expect, it, vi } from "vitest";
import axios from "axios";
import { buscarCotacao, converterMoeda } from "../src/moeda";

vi.mock('axios', () => ({
    default: {
        get: vi.fn(),
    }
}))

describe("Biblioteca de moedas.", () => {
    it("Deve buscar a cotação atual da moeda", async () => {
        axios.get.mockResolvedValue(
            {
                data: {
                    rates: { BRL: 5.36 }
                }
            }
        )
        const cotacao = await buscarCotacao("USD", "BRL")
        expect(cotacao).toBe(5.36)
        expect(axios.get).toHaveBeenCalledWith(
            'https://api.frankfurter.app/latest', {
            params: {
                from: 'USD',
                to: 'BRL'
            }
        }
        )
    })

    it("Deve lançar erro quando a moeda destino não for encontrada", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: {}
            }
        })

        await expect(
            buscarCotacao("USD", "BRL")
        ).rejects.toThrow(
            "Moeda destino não encontrada na resposta da API."
        )
    })

    it("Deve retornar a cotação de EUR para BRL", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { BRL: 6.20 }
            }
        })

        const cotacao = await buscarCotacao("EUR", "BRL")

        expect(cotacao).toBe(6.20)
    })

    it("Deve retornar a cotação de USD para EUR", async () => {
        axios.get.mockResolvedValue({
            data: {
                rates: { EUR: 0.85 }
            }
        })

        const cotacao = await buscarCotacao("USD", "EUR")

        expect(cotacao).toBe(0.85)
    })

    describe("Biblioteca de moedas.", () => {
        it("Deve converter um valor de USD para BRL", async () => {
            axios.get.mockResolvedValue({
                data: {
                    rates: { BRL: 5.36 }
                }
            })

            const resultado = await converterMoeda(10, "USD", "BRL")

            expect(resultado).toBe(53.60)
        })

        it("Deve converter um valor de EUR para BRL", async () => {
            axios.get.mockResolvedValue({
                data: {
                    rates: { BRL: 6.20 }
                }
            })

            const resultado = await converterMoeda(10, "EUR", "BRL")

            expect(resultado).toBe(62.00)
        })
    })
})
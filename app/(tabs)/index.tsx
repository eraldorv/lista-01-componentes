import { Image } from "expo-image";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

const CATEGORIAS = [
  { id: "1", nome: "Pizza", emoji: "🍕" },
  { id: "2", nome: "Hambúrguer", emoji: "🍔" },
  { id: "3", nome: "Sushi", emoji: "🍣" },
];

const RESTAURANTES = [
  {
    id: "1",
    nome: "Pizzaria Bráz",
    avaliacao: "4.9 ★",
    tempo: "30-40 min",
    frete: "R$ 7,90",
    especialidade: "Pizza Artesanal & Forno a Lenha",
  },
  {
    id: "2",
    nome: "Outback Steakhouse",
    avaliacao: "4.8 ★",
    tempo: "40-50 min",
    frete: "R$ 9,90",
    especialidade: "Burgers & Costela Barbecue",
  },
  {
    id: "3",
    nome: "Bullguer",
    avaliacao: "4.7 ★",
    tempo: "20-30 min",
    frete: "Grátis",
    especialidade: "Smash Burgers & Batata Crinkle",
  },
  {
    id: "4",
    nome: "Domino's Pizza",
    avaliacao: "4.6 ★",
    tempo: "25-35 min",
    frete: "R$ 5,00",
    especialidade: "Pizzas Tradicionais & Massa Pan",
  },
];

export default function HomeScreen() {
  const [exercicioAtual, setExercicioAtual] = useState<1 | 2 | 3>(3);
  const [abaAtiva, setAbaAtiva] = useState<"restaurantes" | "entregadores">("restaurantes");

  return (
    <View style={styles.appContainer}>
      <View style={styles.conteudoPrincipal}>
       
        {exercicioAtual === 1 && (
          <View style={styles.ex1_container}>
            <Image
              style={styles.ex1_icone}
              source={require("@/assets/images/keroppi-icone.jpg")}
              transition={1000}
            />
            <View style={styles.ex1_header}>
              <ThemedText style={styles.ex1_titulo}>@ERALDORV</ThemedText>
              <ThemedText style={styles.ex1_subtitulo}>
                Eraldo Ribeiro || Artista Digital
              </ThemedText>
            </View>

            <View style={styles.ex1_cardsinfo}>
              <View style={styles.ex1_infoum}>
                <ThemedText style={styles.ex1_tituloCard}>meus_contatos</ThemedText>
                <ThemedText style={styles.ex1_textoqualquer}>
                  eraldorv15@gmail.com
                </ThemedText>
              </View>
            </View>

            <View style={styles.ex1_cardois}>
              <ThemedText style={styles.ex1_textopequenino}>
                "Bad dreams in the night{"\n"}
                They told me I was going to lose the fight{"\n"}
                Leave behind my Wuthering, Wuthering{"\n"}
                Wuthering Heights"
              </ThemedText>
            </View>
          </View>
        )}

      
        {exercicioAtual === 2 && (
          <ScrollView
            contentContainerStyle={styles.ex2_scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <ThemedView style={styles.ex2_cardsinfo}>
              <ThemedView style={styles.ex2_perfil}>
                <ThemedView style={styles.ex2_infoperfil}>
                  <Image
                    style={styles.ex2_icone}
                    source={require("@/assets/images/keroppi-icone.jpg")}
                    transition={1000}
                  />
                  <ThemedView style={styles.ex2_textoPerfilContainer}>
                    <ThemedText style={styles.ex2_titulo}>@eraldorv#2005</ThemedText>
                    <ThemedText style={styles.ex2_subtitulo}>
                      assistidor de filme
                    </ThemedText>
                    <ThemedText style={styles.ex2_subtitulo}>
                      7 seguidores • 7 seguindo
                    </ThemedText>
                  </ThemedView>
                </ThemedView>

                <ThemedView style={styles.ex2_filmescarrosel}>
                  <ThemedText style={styles.ex2_textopequenino}>
                    Filmes Recentes:
                  </ThemedText>

                  <ThemedView style={styles.ex2_filmerecentes}>
                    <Image
                      style={styles.ex2_filme}
                      source={require("@/assets/images/filmeu.jpg")}
                      transition={1000}
                    />
                    <Image
                      style={styles.ex2_filme}
                      source={require("@/assets/images/filmed.jpg")}
                      transition={1000}
                    />
                    <Image
                      style={styles.ex2_filme}
                      source={require("@/assets/images/filmet.jpg")}
                      transition={1000}
                    />
                    <Image
                      style={styles.ex2_filme}
                      source={require("@/assets/images/filmeq.jpg")}
                      transition={1000}
                    />
                  </ThemedView>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <ThemedView style={styles.ex2_header}>
              <ThemedText style={styles.ex2_tituloCard}>Atividades Recentes</ThemedText>
              <ThemedText style={styles.ex2_textopequenino}>
                Confira aqui as atividades recentes de seus amigos.
              </ThemedText>
              <ThemedView style={styles.ex2_cardcinzasemnome}>
                <ThemedText style={styles.ex2_textoatividade}>
                  fulano terminou tal série
                </ThemedText>
                <ThemedText style={styles.ex2_textoatividade}>
                  fulano terminou esse filme
                </ThemedText>
                <ThemedText style={styles.ex2_textoatividade}>
                  fulano começou a assistir esse filme ai
                </ThemedText>
                <ThemedText style={styles.ex2_textoatividade}>
                  você terminou de assistir akira
                  <Image
                    style={styles.ex2_filmeatividade}
                    source={require("@/assets/images/filmeu.jpg")}
                    transition={1000}
                  />
                  <ThemedText style={styles.ex2_textoatividade}> ★★★★★</ThemedText>
                </ThemedText>
                <ThemedText style={styles.ex2_textoatividade}>
                  fulano terminou tal série
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ScrollView>
        )}

        {exercicioAtual === 3 && (
          <View style={styles.ex3_container}>
            <View style={styles.ex3_iBorda}>
             
              <View style={styles.ex3_header}>
                <View style={styles.ex3_topBar}>
                  <ThemedText style={styles.ex3_logoApp}> EFOOD</ThemedText>
                  <ThemedText style={styles.ex3_localizacao}>📍 Recife, PE</ThemedText>
                </View>

               
                <View style={styles.ex3_searchBar}>
                  <ThemedText style={styles.ex3_searchText}>
                    Buscar...
                  </ThemedText>
                </View>

               
                <View style={styles.ex3_abas}>
                  <TouchableOpacity onPress={() => setAbaAtiva("restaurantes")}>
                    <ThemedText
                      style={[
                        styles.ex3_abaTexto,
                        abaAtiva === "restaurantes" && styles.ex3_abaAtiva,
                      ]}
                    >
                      Restaurantes
                    </ThemedText>
                  </TouchableOpacity>
                  <ThemedText style={styles.ex3_divisoriaAbas}>|</ThemedText>
                  <TouchableOpacity onPress={() => setAbaAtiva("entregadores")}>
                    <ThemedText
                      style={[
                        styles.ex3_abaTexto,
                        abaAtiva === "entregadores" && styles.ex3_abaAtiva,
                      ]}
                    >
                      Entregadores
                    </ThemedText>
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ex3_scrollConteudo}
              >
              
                <View style={styles.ex3_bannerPromo}>
                  <View style={styles.ex3_bannerTextoContainer}>
                    <ThemedText style={styles.ex3_bannerTag}>OFERTA DO DIA</ThemedText>
                    <ThemedText style={styles.ex3_bannerTitulo}>50% OFF</ThemedText>
                    <ThemedText style={styles.ex3_bannerSubtitulo}>
                      nos seus pratos favoritos!
                    </ThemedText>
                  </View>
                  <ThemedText style={styles.ex3_bannerEmoji}>🏷️</ThemedText>
                </View>

                <View style={styles.ex3_categoriasContainer}>
                  {CATEGORIAS.map((cat) => (
                    <TouchableOpacity key={cat.id} style={styles.ex3_cardCategoria}>
                      <View style={styles.ex3_iconBox}>
                        <ThemedText style={styles.ex3_emojiText}>{cat.emoji}</ThemedText>
                      </View>
                      <ThemedText style={styles.ex3_nomeCategoria}>
                        {cat.nome}
                      </ThemedText>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Lista de Restaurantes */}
                <View style={styles.ex3_secao}>
                  <ThemedText style={styles.ex3_tituloSecao}>
                    Pizzarias & Hamburguerias
                  </ThemedText>
                  {RESTAURANTES.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.ex3_cardRestaurante}>
                      <View style={styles.ex3_fotoRestaurante} />
                      <View style={styles.ex3_infoRestaurante}>
                        <ThemedText style={styles.ex3_nomeRestaurante}>
                          {item.nome}
                        </ThemedText>
                        <ThemedText style={styles.ex3_detalheRestaurante}>
                          {item.avaliacao} • {item.especialidade}
                        </ThemedText>
                        <ThemedText style={styles.ex3_entregaRestaurante}>
                          {item.tempo} • {item.frete}
                        </ThemedText>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </View>

    
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navBotao, exercicioAtual === 1 && styles.navBotaoDesabilitado]}
          disabled={exercicioAtual === 1}
          onPress={() => setExercicioAtual((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev))}
        >
          <ThemedText style={styles.navTexto}>← Anterior</ThemedText>
        </TouchableOpacity>

        <ThemedText style={styles.navIndicador}>Ex. {exercicioAtual} de 3</ThemedText>

        <TouchableOpacity
          style={[styles.navBotao, exercicioAtual === 3 && styles.navBotaoDesabilitado]}
          disabled={exercicioAtual === 3}
          onPress={() => setExercicioAtual((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : prev))}
        >
          <ThemedText style={styles.navTexto}>Próximo →</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#151518",
  },
  conteudoPrincipal: {
    flex: 1,
  },

 
  ex1_container: {
    flex: 1,
    backgroundColor: "#beff55",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  ex1_icone: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  ex1_header: {
    alignItems: "center",
    gap: 1,
    backgroundColor: "transparent",
  },
  ex1_titulo: {
    fontSize: 28,
    color: "#367205",
    fontWeight: "bold",
    textAlign: "center",
  },
  ex1_subtitulo: {
    fontStyle: "italic",
    color: "#367205",
    fontSize: 12,
    textAlign: "center",
  },
  ex1_cardsinfo: {
    width: "45%",
    backgroundColor: "transparent",
  },
  ex1_infoum: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    gap: 5,
  },
  ex1_tituloCard: {
    fontSize: 25,
    color: "#367205",
    fontWeight: "bold",
  },
  ex1_textoqualquer: {
    color: "#367205",
    fontSize: 14,
  },
  ex1_textopequenino: {
    color: "#6a8b4e",
    textAlign: "center",
    fontSize: 10,
  },
  ex1_cardois: {
    width: "40%",
    backgroundColor: "transparent",
  },


  ex2_scrollContent: {
    padding: 12,
    gap: 8,
  },
  ex2_cardsinfo: {
    width: "100%",
    backgroundColor: "transparent",
  },
  ex2_header: {
    backgroundColor: "#221f3d",
    padding: 10,
    borderRadius: 6,
    gap: 4,
  },
  ex2_perfil: {
    backgroundColor: "#221f3d",
    padding: 10,
    borderRadius: 6,
    gap: 6,
  },
  ex2_infoperfil: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ex2_textoPerfilContainer: {
    backgroundColor: "transparent",
    flex: 1,
  },
  ex2_icone: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  ex2_titulo: {
    fontSize: 18,
    color: "#aeb4ff",
    fontWeight: "bold",
  },
  ex2_subtitulo: {
    color: "#aeb4ff",
    fontSize: 11,
  },
  ex2_filmescarrosel: {
    width: "100%",
    backgroundColor: "transparent",
    gap: 4,
  },
  ex2_textopequenino: {
    color: "#aeb4ff",
    fontSize: 10,
  },
  ex2_filmerecentes: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  ex2_filme: {
    flex: 1,
    height: 80,
    borderRadius: 4,
  },
  ex2_tituloCard: {
    fontSize: 16,
    color: "#aeb4ff",
    fontWeight: "bold",
  },
  ex2_cardcinzasemnome: {
    backgroundColor: "transparent",
    gap: 3,
  },
  ex2_textoatividade: {
    color: "#aeb4ff",
    backgroundColor: "#151518",
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  ex2_filmeatividade: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },

 
  ex3_container: {
    flex: 1,
    backgroundColor: "#e03838",
  },
  ex3_iBorda: {
    flex: 1,
    backgroundColor: "#ffecec",
    borderWidth: 12,
    borderColor: "#e03838",
    borderRadius: 20,
    overflow: "hidden",
  },
  ex3_header: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0d0d0",
    gap: 10,
  },
  ex3_topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ex3_logoApp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e03838",
  },
  ex3_localizacao: {
    color: "#555555",
    fontSize: 12,
    fontWeight: "600",
  },
  ex3_searchBar: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  ex3_searchText: {
    color: "#999999",
    fontSize: 13,
  },
  ex3_abas: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ex3_abaTexto: {
    color: "#777777",
    fontSize: 14,
  },
  ex3_abaAtiva: {
    color: "#e03838",
    fontWeight: "bold",
  },
  ex3_divisoriaAbas: {
    color: "#cccccc",
  },
  ex3_scrollConteudo: {
    paddingBottom: 20,
  },
  ex3_bannerPromo: {
    backgroundColor: "#e03838",
    marginHorizontal: 15,
    marginTop: 15,
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ex3_bannerTextoContainer: {
    gap: 2,
  },
  ex3_bannerTag: {
    color: "#ffcccc",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  ex3_bannerTitulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },
  ex3_bannerSubtitulo: {
    color: "#ffffff",
    fontSize: 12,
  },
  ex3_bannerEmoji: {
    fontSize: 30,
  },
  ex3_categoriasContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  ex3_cardCategoria: {
    alignItems: "center",
  },
  ex3_iconBox: {
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f0c0c0",
  },
  ex3_emojiText: {
    fontSize: 28,
  },
  ex3_nomeCategoria: {
    fontSize: 12,
    fontWeight: "600",
    color: "#080404",
    marginTop: 6,
    textAlign: "center",
  },
  ex3_secao: {
    paddingHorizontal: 15,
    marginTop: 5,
  },
  ex3_tituloSecao: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#080404",
    marginBottom: 10,
  },
  ex3_cardRestaurante: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f0d0d0",
    alignItems: "center",
  },
  ex3_fotoRestaurante: {
    width: 50,
    height: 50,
    backgroundColor: "#e03838",
    borderRadius: 25,
    marginRight: 12,
  },
  ex3_infoRestaurante: {
    flex: 1,
  },
  ex3_nomeRestaurante: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#080404",
  },
  ex3_detalheRestaurante: {
    fontSize: 13,
    color: "#666666",
    marginTop: 2,
  },
  ex3_entregaRestaurante: {
    fontSize: 12,
    color: "#888888",
    marginTop: 2,
  },

  
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#0d0d0f",
    borderTopWidth: 1,
    borderTopColor: "#2a284e",
  },
  navBotao: {
    backgroundColor: "#312d5a",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  navBotaoDesabilitado: {
    opacity: 0.3,
  },
  navTexto: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  navIndicador: {
    color: "#a0a0a0",
    fontSize: 12,
    fontWeight: "600",
  },
});
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: "Helvetica" },
  section: {
    marginBottom: 15,
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between", // Align image left and text right
    alignItems: "center",
    borderBottom: "1pt solid #ccc",
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "relative",
  },
  image: {
    width: 120, // Adjust size as needed
    height: 30,
    borderRadius: 5,
  },
  icon: {
    width: 12, // Adjust as needed
    height: 12,
    marginRight: 5,
  },
  leftColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightColumn: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0073e6",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#6082b6",
  },
  text: { fontSize: 12, color: "#444", fontWeight: "normal" },
  boldText: { fontWeight: "bold", fontSize: 13 },
  badge: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#0073e6",
    padding: 5,
    borderRadius: 4,
  },
  bulletList: {
    marginTop: 5,
    marginLeft: 10, // Indent the list
  },
  bulletPoint: {
    fontSize: 12,
    marginBottom: 3, // Space between bullet points
  },
  table: {
    flexDirection: "row",
    borderBottom: "1px solid #000",
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableHeader: {
    backgroundColor: "#eaeaea", // Slightly darker header
    fontWeight: "bold",
    padding: 10,
  },
  summaryBadge: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    padding: "3px",
    borderRadius: 4,
    textAlign: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  appliedDate: {
    fontSize: 12,
    color: "gray",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  belowAvg: { backgroundColor: "#ff7675" }, // Red
  match: { backgroundColor: "#3498db" }, // Blue
  good: { backgroundColor: "#27ae60" }, // Green
  tableColumn: { flex: 1, fontSize: 10, textAlign: "center" },
  badgejobtitle: {
    backgroundColor: "#007bff",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10, // Increase padding for longer text
    borderRadius: 5,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

// PDF Document Component
const PdfDocument = ({ applicant }) => (
  <Document>
    {/* Page 1 */}
    <Page size="A4" style={styles.page}>
      {/* Header Row (Image + Heading) */}
      <View style={styles.headerRow}>
        {/* Logo on the Left */}
        <Image src={"/Logo_on_white_cropped.png"} style={styles.image} />

        {/* Heading on the Right */}
        <Text style={styles.heading}>Applicant Details</Text>
      </View>
      {/* header */}

      <View style={styles.header}>
        {/* Left Section */}
        <View style={styles.leftColumn}>
          <Image source={{ uri: "/user.png" }} style={styles.profileImage} />
          <View style={styles.infoContainer}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{applicant.name}</Text>
              <Text style={styles.badgejobtitle}>{applicant.jobTitle}</Text>
            </View>
            <Text style={styles.appliedDate}>
              Applied on {applicant.appliedDate}
            </Text>
            <View style={styles.contactRow}>
              <Image source={{ uri: "/email.png" }} style={styles.icon} />
              <Text style={[styles.text, { marginRight: 15 }]}>
                {applicant.email}
              </Text>
              <Image source={{ uri: "/phone.jpg" }} style={styles.icon} />
              <Text style={[styles.text, { marginRight: 15 }]}>
                {applicant.phone}
              </Text>{" "}
              <Image source={{ uri: "/location.png" }} style={styles.icon} />
              <Text style={styles.text}>{applicant.location}</Text>{" "}
            </View>
          </View>
        </View>
      </View>

      {/* Personal Info */}
      <View style={[styles.section]}>
        <Text style={[styles.title]}>Personal Information</Text>
        <Text style={styles.text}>{applicant.personalInfo}</Text>
      </View>

      {/* AI Summary */}
      <View style={[styles.section]}>
        <Text style={[styles.title]}>AI Summary</Text>
        <Text style={styles.text}>
          Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
          en efeto su pensamiento, apretándole a ello la falta que él pensaba
          que hacía en el mundo su tardanza, según eran los agravios que pensaba
          deshacer, tuertos que enderezar, sinrazones que emendar y abusos que
          mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna
          de su intención y sin que nadie le viese, una mañana, antes del día,
          que era uno de los calurosos del mes de Julio, se armó de todas sus
          armas, subió sobre Rocinante, puesta su mal compuesta celada, embrazó
          su adarga, tomó su lanza y por la puerta falsa de un corral salió al
          campo con grandísimo contento y alborozo de ver con cuánta facilidad
          había leído en los libros que tal le tenían. En lo de las armas
          blancas, pensaba limpiarlas de manera, en teniendo lugar, que lo
          fuesen más que un arminio; y con esto se quietó18 y prosiguió su
          camino, sin llevar otro que aquel que su caballo quería, creyendo que
          en aquello consistía la fuerza de las aventuras
        </Text>
        <Text style={styles.text}>
          había el rubicundo Apolo tendido por la faz de la ancha y espaciosa
          tierra las doradas hebras de sus hermosos cabellos, y apenas los
          pequeños y pintados pajarillos con sus arpadas lenguas habían saludado
          con dulce y meliflua armonía la venida de la rosada Aurora, que,
          dejando la blanda cama del celoso marido, por las puertas y balcones
          del manchego horizonte a los mortales se mostraba, cuando el famoso
          caballero don Quijote de la Mancha, dejando las ociosas plumas, subió
          sobre su famoso caballo Rocinante y comenzó a caminar por el antiguo y
          conocido Campo de Montiel.
        </Text>
      </View>

      {/* Recommendation */}
      <View style={[styles.section]}>
        <Text style={[styles.title]}>Recruiter Recommendation</Text>
        <Text style={styles.text}>{applicant.recommendation}</Text>
      </View>

      {/* Red Flags (if any) */}
      {applicant.redFlags && (
        <View style={[styles.section]}>
          <Text style={[styles.title, { color: "#d9534f" }]}> Red Flags</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>
              • Lack of direct experience in UI design tools and methodologies.
            </Text>
            <Text style={styles.bulletPoint}>
              • Entry-level project management experience may not meet
              expectations for a UI Designer position.
            </Text>
            <Text style={styles.bulletPoint}>
              • Experience in designing user interfaces is minimal and not
              recent.
            </Text>
          </View>
        </View>
      )}
    </Page>

    {/* Page 2 */}
    <Page size="A4" style={styles.page}>
      <View style={styles.headerRow}>
        {/* Logo on the Left */}
        <Image src={"/Logo_on_white_cropped.png"} style={styles.image} />

        {/* Heading on the Right */}
        <Text style={styles.heading}>Resume Screening Details</Text>
      </View>
      {/* Quick Info Section */}
      <View
        style={[
          styles.section,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#f5f5f5",
            padding: "10px",
          },
        ]}
      >
        <View>
          <Text style={styles.title}>Relevant Experience</Text>
          <Text>{applicant.experience} years</Text>
        </View>
        <View>
          <Text style={styles.title}>Current Salary</Text>
          <Text>${applicant.currentSalary}</Text>
        </View>
        <View>
          <Text style={styles.title}>Expected Salary</Text>
          <Text>${applicant.expectedSalary}</Text>
        </View>
      </View>

      {/* Work Experience */}
      <View style={[styles.section]}>
        <Text style={styles.title}>Work Experience</Text>
        <Text style={styles.text}>
          Designed a student portal website that allows access to blogs,
          research articles, and inter-office communication. Wrote and published
          5+ blog posts highlighting current industry trends, meeting monthly
          deadlines. Interviewed faculty, staff, and employers ambitiously to
          generate content for blog posts and other relevant articles.
        </Text>
      </View>

      {/* Score Table */}
      <View style={[styles.section]}>
        <Text style={styles.title}>Score Summary</Text>
        <View style={[styles.table, styles.tableHeader]}>
          <Text style={styles.tableColumn}>Label</Text>
          <Text style={styles.tableColumn}>Value</Text>
          <Text style={styles.tableColumn}>Weightage</Text>
          <Text style={styles.tableColumn}>Summary</Text>
        </View>
        {applicant.scores.map((score, index) => (
          <View key={index} style={styles.table}>
            <Text style={styles.tableColumn}>{score.label}</Text>
            <Text style={styles.tableColumn}>{score.value}</Text>
            <Text style={styles.tableColumn}>{score.weightage}</Text>
            <Text
              style={[
                styles.tableColumn,
                styles.summaryBadge,
                score.summary === "Below Avg"
                  ? styles.belowAvg
                  : score.summary === "Match"
                  ? styles.match
                  : styles.good,
              ]}
            >
              {score.summary}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills Table */}
      <View style={[styles.section]}>
        <Text style={styles.title}>Skills Assessment</Text>
        <View style={[styles.table, styles.tableHeader]}>
          <Text style={styles.tableColumn}>Skill</Text>
          <Text style={styles.tableColumn}>Relevance</Text>
          <Text style={styles.tableColumn}>Match</Text>
        </View>
        {applicant.skills.map((skill, index) => (
          <View key={index} style={styles.table}>
            <Text style={styles.tableColumn}>{skill.name}</Text>
            <Text style={styles.tableColumn}> {skill.relevance}</Text>
            <Text style={styles.tableColumn}>{skill.match}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PdfDocument;

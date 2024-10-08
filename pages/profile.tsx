import { Button, Col, Container, Row } from "reactstrap";
import HeaderAuth from "../src/components/common/headerAuth";
import UserForm from "../src/components/profile/user";
import styles from "../styles/profile.module.scss";
import Head from "next/head";
import Footer from "../src/components/common/footer";
import { useEffect, useState } from "react";
import PasswordForm from "../src/components/profile/password";
import { useRouter } from "next/router";
import PageSpinner from "../src/components/common/spinner";

const UserInfo = () => {

    const [form, setForm] = useState("userForm")
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!sessionStorage.getItem("onebitflix-token")) {
            router.push("/login")
        } else {
            setLoading(false)
        }
    }, []);

    if (loading) {
        return <PageSpinner />
    }

    return (<>

        <Head>
            <title>Onebitflix - Meus Dados</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main className={styles.main}>
            <div className={styles.header}>
                <HeaderAuth />
            </div>
            <Container className={styles.gridContainer}>
                <p className={styles.title}>Minha Conta</p>
                <Row>
                    <Col md={4} className={styles.btnColumn}>
                        <Button
                            className={styles.renderForm}
                            style={{ color: form === "userForm" ? "#FF0044" : "white" }}
                            onClick={() => setForm("userForm")}>
                            DADOS PESSOAIS
                        </Button>

                        <Button
                            className={styles.renderForm}
                            style={{ color: form === "passwordForm" ? "#FF0044" : "white" }}
                            onClick={() => setForm("passwordForm")}>
                            SENHA
                        </Button>
                    </Col>
                    <Col md>
                        {form === "userForm" ? <UserForm /> : <PasswordForm />}
                    </Col>
                </Row>

            </Container>
            <div className={styles.footer}>
                <Footer />
            </div>

        </main>

    </>)

}

export default UserInfo
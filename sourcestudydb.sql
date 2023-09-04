--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Homebrew)
-- Dumped by pg_dump version 15.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: topics; Type: TABLE; Schema: public; Owner: sof
--

CREATE TABLE public.topics (
    id integer NOT NULL,
    name character varying(40),
    comfort integer
);


ALTER TABLE public.topics OWNER TO sof;

--
-- Name: topics_id_seq; Type: SEQUENCE; Schema: public; Owner: sof
--

CREATE SEQUENCE public.topics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.topics_id_seq OWNER TO sof;

--
-- Name: topics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sof
--

ALTER SEQUENCE public.topics_id_seq OWNED BY public.topics.id;


--
-- Name: topics id; Type: DEFAULT; Schema: public; Owner: sof
--

ALTER TABLE ONLY public.topics ALTER COLUMN id SET DEFAULT nextval('public.topics_id_seq'::regclass);


--
-- Data for Name: topics; Type: TABLE DATA; Schema: public; Owner: sof
--

COPY public.topics (id, name, comfort) FROM stdin;
1	HTTP Headers	3
2	Ports	8
3	Proxies	8
6	\N	5
\.


--
-- Name: topics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sof
--

SELECT pg_catalog.setval('public.topics_id_seq', 7, true);


--
-- Name: topics topics_pkey; Type: CONSTRAINT; Schema: public; Owner: sof
--

ALTER TABLE ONLY public.topics
    ADD CONSTRAINT topics_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


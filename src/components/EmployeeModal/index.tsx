import { FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useEmployees } from "../../hooks/useEmployees";

import formatDate from "../../utils/formatDate";

import { Container, Content, Form, Buttons } from "./styles";

interface IEmployeeModalProps {
  onCloseModal(): void;
  employeeId?: string;
}

export function EmployeeModal({
  onCloseModal,
  employeeId,
}: IEmployeeModalProps): JSX.Element {
  const { createEmployee, updateEmployee, getEmployee } = useEmployees();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [team, setTeam] = useState("");
  const [startDate, setStartDate] = useState("");

  const [isValidCpf, setIsValidCpf] = useState<boolean | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      if (employeeId) {
        const employee = await getEmployee(employeeId);

        setName(employee.name);
        setCpf(employee.cpf);
        setEmail(employee.email);
        setGender(employee.gender);
        setBirth(formatDate(employee.birth).iso);
        setTeam(employee.team);
        setStartDate(formatDate(employee.startDate).iso);
      }
    })();
  }, [employeeId]);

  function resetFields() {
    setName("");
    setCpf("");
    setEmail("");
    setGender("");
    setBirth("");
    setTeam("");
    setStartDate("");
  }

  async function handleCreateSubmit() {
    await createEmployee({
      name,
      cpf,
      email,
      gender,
      birth: formatDate(birth).data,
      team,
      startDate: formatDate(startDate).data,
    });

    onCloseModal();
  }

  async function handleUpdateSubmit() {
    if (employeeId) {
      await updateEmployee(employeeId, {
        name,
        cpf,
        email,
        gender,
        birth: formatDate(birth).data,
        team,
        startDate: formatDate(startDate).data,
      });

      onCloseModal();
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isValidCpf) {
      toast.error("Invalid CPF.");
      return;
    }
    if (!isValidEmail) {
      toast.error("Invalid Email.");
      return;
    }

    if (employeeId) {
      await handleUpdateSubmit();
    } else {
      await handleCreateSubmit();
    }

    resetFields();
  }

  function validateCpfInput(cpf: string) {
    setCpf(cpf);
    const cpfFormat = /^[0-9]{11}$/;

    if (!cpf.match(cpfFormat)) {
      setIsValidCpf(false);
    } else {
      setIsValidCpf(true);
    }
  }

  function validateEmailInput(email: string) {
    setEmail(email);
    const emailFormat = /^\w+([.-]?\w+)*@nutcache[.]com+$/;

    if (!email.match(emailFormat)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
        <div>
          <header>
            <h2>{employeeId ? "Update" : "Register new"} employee</h2>
          </header>

          <Form id="employeeForm" onSubmit={onSubmit}>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                name="cpf"
                type="text"
                placeholder="CPF (only numbers)"
                value={cpf}
                className={isValidCpf !== (false && null) ? "" : "errorCPF"}
                onChange={(e) => validateCpfInput(e.target.value)}
                required
              />
            </div>

            <input
              name="email"
              type="text"
              placeholder="your.email@nutcache.com"
              value={email}
              className={isValidEmail !== (false && null) ? "" : "errorEmail"}
              onChange={(e) => validateEmailInput(e.target.value)}
              required
            />

            <div>
              <label>
                Gender:
                <select
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  required
                >
                  <option disabled value="">
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="non-binary">Non-binary</option>
                </select>
              </label>
              <label>
                Birth:
                <input
                  name="birth"
                  type="date"
                  required
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label>
                Team:
                <select
                  name="team"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                >
                  <option disabled value="">
                    Select team
                  </option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="mobile">Mobile</option>
                </select>
              </label>
              <label>
                Start Date:
                <input
                  name="startDate"
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
            </div>
          </Form>

          <Buttons>
            <button type="submit" form="employeeForm">
              {employeeId ? "Update" : "Register"}
            </button>
            <button type="submit" onClick={onCloseModal}>
              Cancel
            </button>
          </Buttons>
        </div>
      </Content>
    </Container>
  );
}

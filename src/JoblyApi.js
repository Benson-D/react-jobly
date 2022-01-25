import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class JoblyApi {

  static token;


  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    try {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    } catch (err) {
      return err;
    }
  }

  /** Get list of companies
   *
   * returns [{company}, {company}, {company}]
   */

  static async getCompanies(searchTerm) {
    const res = searchTerm
      ? await this.request("companies", { name: searchTerm })
      : await this.request("companies");
    return res.companies;
  }

  /** Get list of jobs
   *
   * returns [{job}, {job}, {job}]
   */

  static async getJobs(searchTerm) {
    let res = searchTerm
      ? await this.request("jobs", { title: searchTerm })
      : await this.request("jobs");
    return res.jobs;
  }

  /** Get details of a job by id */
  static async getJobById(id) {
    const res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Registers a user. Returns user token */
  static async signUp({ username, password, firstName, lastName, email }) {
    const res = await this.request(
      "auth/register",
      { username, password, firstName, lastName, email },
      "post"
    );
    return res.token;
  }

  /** Function logs in a user. Returns user token */
  static async login({ username, password }) {
    const res = await this.request(
      "auth/token",
      { username, password },
      "post"
    );
    return res.token;
  }
  
  /** Get user info by username */
  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    console.log(res.user, "has been passed through to API");
    return res.user;
  }

  /** Edit user */
  static async editUser({ username, ...data }) {
    const res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default JoblyApi;

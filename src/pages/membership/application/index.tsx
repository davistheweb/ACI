import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Application = () => {
  return (
    <section className="py-20 pt-32 min-h-screen bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-church-brown mb-10">
            Welcome to Apostolic Congress International Application Page
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join a global network of church leaders and ministers committed to
            advancing Christian unity and discipling the nations.
          </p>
        </div>

        <div className="flex items-center justify-center">
          {/* Application form */}
          <div className="bg-church-brown p-10 w-full">
            <form className="text-white">
              <h1 className="text-2xl md:text-4xl text-center max-w-3xl mx-auto leading-relaxed mt-5 font-semibold ">
                Apply here
              </h1>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fullname" className="font-semibold">
                    FULLNAME
                  </Label>
                  <Input
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Enter your fullname"
                    id="fullname"
                    name="fullname"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="address" className="font-semibold">
                    ADDRESS
                  </Label>
                  <Textarea
                    className="border-none text-church-brown outline-none ring-0 font-semibold rounded-s-sm resize-none"
                    placeholder="Enter your address"
                    id="address"
                    name="address"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="church_name" className="font-semibold">
                    Church / Ministry Name and Address
                  </Label>
                  <Textarea
                    className="border-none text-church-brown outline-none ring-0 font-semibold rounded-s-sm resize-none"
                    placeholder="Enter your church / ministry name and address"
                    id="church_name"
                    name="church_name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="title_and_rank" className="font-semibold">
                    TITLE/ Rank
                  </Label>
                  <Input
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Enter title/ rank"
                    id="title_and_rank"
                    name="title_and_rank"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="other_association" className="font-semibold">
                    Are you or your organisation a member of other
                    association(S)? , Please list them here with their addresses
                  </Label>
                  <Textarea
                    className="border-none text-church-brown outline-none ring-0 font-semibold rounded-s-sm resize-none"
                    placeholder="Enter other association if any (optional)"
                    id="other_association"
                    name="other_association"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="why_join_aci" className="font-semibold">
                    Why do you want to join with ACI?
                  </Label>
                  <Textarea
                    className="border-none text-church-brown outline-none ring-0 font-semibold rounded-s-sm resize-none"
                    placeholder="Enter reasons for joining ACI"
                    id="why_join_aci"
                    name="why_join_aci"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="confirm_read_requisite" className="font-semibold">
                    Did you read and understand the requirements for
                    affiliation?
                  </Label>
                  <div className="flex gap-3">
                    <span className="flex gap-2">
                      <Label htmlFor="confirm_read_yes">Yes </Label>
                      <input
                        type="radio"
                        value="yes"
                        className="w-4 cursor-pointer"
                        id="confirm_read_yes"
                        name="confirm_read_requisite"
                      />
                    </span>
                    <span className="flex gap-2">
                      <Label htmlFor="confirm_read_no">No </Label>
                      <input
                        type="radio"
                        value="no"
                        className="w-4 cursor-pointer"
                        id="confirm_read_no"
                        name="confirm_read_requisite"
                      />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="application_support" className="font-semibold">
                    Does your leadership support this application?
                  </Label>
                  <div className="flex gap-3">
                    <span className="flex gap-2">
                      <Label htmlFor="application_support_yes">Yes </Label>
                      <input
                        type="radio"
                        value="yes"
                        className="w-4 cursor-pointer"
                        id="application_support_yes"
                        name="application_support"
                      />
                    </span>
                    <span className="flex gap-2">
                      <Label htmlFor="application_support_no">No </Label>
                      <input
                        type="radio"
                        value="no"
                        className="w-4 cursor-pointer"
                        id="application_support_no"
                        name="application_support"
                      />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="agreed_doctrinal" className="font-semibold">
                    Do you agree with doctrinal statement of ACI?
                  </Label>
                  <div className="flex gap-3">
                    <span className="flex gap-2">
                      <Label htmlFor="agreed_doctrinal_yes">Yes </Label>
                      <input
                        type="radio"
                        value="yes"
                        className="w-4 cursor-pointer"
                        id="agreed_doctrinal_yes"
                        name="agreed_doctrinal"
                      />
                    </span>
                    <span className="flex gap-2">
                      <Label htmlFor="agreed_doctrinal_no">No </Label>
                      <input
                        type="radio"
                        value="no"
                        className="w-4 cursor-pointer"
                        id="agreed_doctrinal_no"
                        name="agreed_doctrinal"
                      />
                    </span>
                  </div>
                </div>

                <h1 className="text-center font-semibold text-xl md:text-2xl">
                  Please give a brief profile of your church or ministry
                </h1>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="when_started" className="font-semibold">
                    When did the church start?
                  </Label>
                  <Input
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="e.g. 2005"
                    id="when_started"
                    name="when_started"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="members_count" className="font-semibold">
                    How many members?
                  </Label>
                  <Input
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Number of members"
                    id="members_count"
                    name="members_count"
                    type="number"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="accountability" className="font-semibold">
                    Accountability / Mentorship
                  </Label>
                  <Textarea
                    className="border-none text-church-brown outline-none ring-0 font-semibold rounded-s-sm"
                    placeholder="Who is your mentor?"
                    id="accountability"
                    name="accountability"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="estimate_collection" className="font-semibold">
                    Estimate monthly/yearly collection (optional)
                  </Label>
                  <Input
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="e.g. monthly: ₦, yearly: ₦"
                    id="estimate_collection"
                    name="estimate_collection"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="qualifications" className="font-semibold">
                    Qualifications
                  </Label>
                  <Input
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Your qualifications"
                    id="qualifications"
                    name="qualifications"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="bible_school" className="font-semibold">
                    Bible School / Seminary attended
                  </Label>
                  <Input
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Institution name (if any)"
                    id="bible_school"
                    name="bible_school"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="regular_activities" className="font-semibold">
                    Regular activities
                  </Label>
                  <Textarea
                    className="border-none text-church-brown outline-none ring-0 font-semibold rounded-s-sm resize-none"
                    placeholder="Describe regular activities"
                    id="regular_activities"
                    name="regular_activities"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="projects" className="font-semibold">
                    Community projects
                  </Label>
                  <Textarea
                    className="border-none text-church-brown outline-none ring-0 font-semibold rounded-s-sm resize-none"
                    placeholder="Community projects you're involved with"
                    id="projects"
                    name="projects"
                  />
                </div>

                <div className="flex gap-4 items-center">
                  <label className="flex gap-2 items-center">
                    <input
                      id="runs_bible_college"
                      name="runs_bible_college"
                      type="checkbox"
                      className="w-4 cursor-pointer"
                    />
                    <span className="font-semibold">
                      Do you / organisation run a Bible College?
                    </span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      id="need_affiliation"
                      name="need_affiliation"
                      type="checkbox"
                      className="w-4 cursor-pointer"
                    />
                    <span className="font-semibold">
                      Need affiliation to an international institution?
                    </span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      id="is_registered"
                      name="is_registered"
                      type="checkbox"
                      className="w-4 cursor-pointer"
                    />
                    <span className="font-semibold">
                      Is your ministry / church registered?
                    </span>
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      id="is_member_aci"
                      name="is_member_aci"
                      type="checkbox"
                      className="w-4 cursor-pointer"
                    />
                    <span className="font-semibold">
                      Are you already a member of ACI?
                    </span>
                  </label>
                </div>

                <h2 className="text-center font-semibold text-lg md:text-xl mt-4">
                  This form must be signed by the founder(s) and at least two
                  leaders of your organisation.
                </h2>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="signatory_1_name" className="font-semibold">
                    Signatory 1 - Name
                  </Label>
                  <Input
                    id="signatory_1_name"
                    name="signatory_1_name"
                    type="text"
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Name"
                  />

                  <Label htmlFor="signatory_1_address" className="font-semibold">
                    Signatory 1 - Address
                  </Label>
                  <Input
                    id="signatory_1_address"
                    name="signatory_1_address"
                    type="text"
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Address"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="signatory_2_name" className="font-semibold">
                    Signatory 2 - Name
                  </Label>
                  <Input
                    id="signatory_2_name"
                    name="signatory_2_name"
                    type="text"
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Name"
                  />

                  <Label htmlFor="signatory_2_address" className="font-semibold">
                    Signatory 2 - Address
                  </Label>
                  <Input
                    id="signatory_2_address"
                    name="signatory_2_address"
                    type="text"
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Address"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="signatory_3_name" className="font-semibold">
                    Signatory 3 - Name
                  </Label>
                  <Input
                    id="signatory_3_name"
                    name="signatory_3_name"
                    type="text"
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Name"
                  />

                  <Label htmlFor="signatory_3_address" className="font-semibold">
                    Signatory 3 - Address
                  </Label>
                  <Input
                    id="signatory_3_address"
                    name="signatory_3_address"
                    type="text"
                    className="border-none text-church-brown outline-none ring-0 text-xl font-semibold rounded-s-sm"
                    placeholder="Address"
                  />
                </div>
                <p className="text-xs text-white mt-4">
                  Note: Apostolic Congress International reserves the right to
                  refuse an application form without explanation. You are
                  required to provide further documents to support your
                  application.
                </p>
                <p className="text-xs text-white mt-1">
                  (Apostolic Congress International is a member of
                  Trans-Atlantic and Pacific Alliance of Churches and other
                  International bodies. In Africa under the incorporation of
                  Jubilee Christian Centre & Ministerial Association Int&pos;l
                  Inc., member of Evangelical Alliance of England and Wales)
                </p>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="bg-white text-church-brown font-semibold py-3 px-5 rounded-md"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

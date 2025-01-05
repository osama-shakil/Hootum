import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CustomButton from "../common/CustomButton";
import { DialogDescription } from "@radix-ui/react-dialog";

const TermsAndConditions = ({ open, toggle, onAgreed }) => {
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="p-8 sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            Terms and Conditions
          </DialogTitle>
          <DialogDescription className="text-md font-semibold tracking-tight">
            Your Agreement
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="relative h-[270px] md:h-[450px] -mt-3">
          <div
            className="h-[270px] md:h-[450px] overflow-y-auto pr-3 custom-scrollbar touch-pan-y"
            style={{
              WebkitOverflowScrolling: "touch", // Enables smooth touch scrolling on iOS
              overscrollBehavior: "contain", // Prevents scroll chaining
            }}
          >
            <Card className="bg-[#0000000D] rounded-[20px] border-0">
              <CardContent className="p-6">
                <div className="space-y-4 text-gray-600 text-sm">
                  <p className="text-gray-500">Last Revised: January 8, 2024</p>

                  <p>
                    This site is provided as a service to our visitors and may
                    be used for informational purposes only. Because the Terms
                    and Conditions contain legal obligations, please read them
                    carefully.
                  </p>

                  <p className="font-medium">1. YOUR AGREEMENT</p>

                  <p>
                    By using this Site, you agree to be bound by, and to comply
                    with, these Terms and Conditions. If you do not agree to
                    these Terms and Conditions, please do not use this site.
                  </p>

                  <p>
                    PLEASE NOTE: We reserve the right, at our sole discretion,
                    to change, modify or otherwise alter these Terms and
                    Conditions at any time. Unless otherwise indicated,
                    amendments will become effective immediately. Please review
                    these Terms and Conditions periodically. Your continued use
                    of the Site following the posting of changes and/or
                    modifications will constitute your acceptance of the
                    revised Terms and Conditions and the reasonableness of
                    these standards for notice of changes. For your
                    information, this page was last updated as of the date at
                    the top of these terms and conditions.
                  </p>

                  <p>
                    PLEASE NOTE: We reserve the right, at our sole discretion,
                    to change, modify or otherwise alter these Terms and
                    Conditions at any time. Unless otherwise indicated,
                    amendments will become effective immediately. Please review
                    these Terms and Conditions periodically. Your continued use
                    of the Site following the posting of changes and/or
                    modifications will constitute your acceptance of the
                    revised Terms and Conditions and the reasonableness of
                    these standards for notice of changes. For your
                    information,
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <DialogFooter className="flex justify-between mt-6">
          <div className="flex justify-end items-center gap-x-4 w-full">
            <Button
              variant="ghost"
              onClick={toggle}
              className="mb-3 font-semibold text-md sm:mb-0 hover:bg-transparent"
            >
              No, Thanks
            </Button>
            <CustomButton text="I agree" handleClick={onAgreed} />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditions;

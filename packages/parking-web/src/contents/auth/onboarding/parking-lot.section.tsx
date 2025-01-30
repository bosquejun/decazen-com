import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import ParkingLotForm from '@/forms/auth/parking-lot.form';
import { ParkingLotSchemaType } from '@/forms/auth/schema/parking.schema';
import { motion } from 'framer-motion';

export default function ParkingLotSection({
  onSubmit,
}: {
  onSubmit: (data: ParkingLotSchemaType) => Promise<void>;
}) {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        ease: 'linear',
        duration: 0.5,
      }}
    >
      <CardDashedGridLines className="p-8 flex flex-col items-center min-w-64 space-y-8">
        <h2 className="text-2xl font-semibold">Complete your profile</h2>
        <ParkingLotForm defaultValues={{}} onSubmit={onSubmit} />
      </CardDashedGridLines>
    </motion.div>
  );
}

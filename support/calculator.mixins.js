export default {
    computed: {
      academicLevels () {
        return this.levels.map((item) => { return item.name })
      },
      writerCategories () {
        return this.writerLevels.map((item) => { return item.level })
      },
      deadlines () {
        return this.time.map((t) => { return t.name })
      },
      serviceTypes () {
        return this.services.map((item) => { return item.name })
      },
      spacingSelected () {
        const spacing = this.order.spacing === 'Single spacing' ? 2 : 1
        return spacing
      },
      total () {
        const _level = this.levels.find((item) => { return item.name === this.order.academicLevel })
        const level = _level ? _level.rate : 1
        //  console.log(level, 'level')
        const charge = this.time.find((t) => { return t.name === this.order.deadline }) || false
        //  console.log('Charge', charge)
        const timeCharge = charge ? charge.charge : 1
  
        const _serviceType = this.services.find((s) => { return s.name === this.order.serviceType })
        const serviceType = _serviceType ? _serviceType.charge : 1
        const spacing = this.order.spacing === 'Single spacing' ? 2 : 1
        const _wLevel = this.writerLevels.find((l) => { return l.level === this.order.writerLevel })
        const wLevel = _wLevel ? _wLevel.rate : 1
        const pragReport = this.order.pragReport ? 5 : 0
        // console.log(this.order.pages, level, timeCharge, wLevel, spacing, serviceType, 18)
        const price = (this.order.pages * level * timeCharge * wLevel * spacing * serviceType * 13) + pragReport
  
        function roundToTwo (num) {
          return +(Math.round(num + 'e+2') + 'e-2')
        }
        return roundToTwo(price)
      }
    },
    data () {
      return {
        level: 'Select level',
        writerCategory: '',
        service: 'Writing from scratch',
        writerLevel: 'standard',
        duration: '24 hrs',
        pages: 1,
        spacing: 'Double',
        order: {
          pragReport: false,
          spacing: 'Double',
          pages: 1,
          writerLevel: 'Standard',
          serviceType: 'Writing from scratch',
          deadline: '6 days',
          academicLevel: 'High school'
        },
        levels: [
          { name: 'Select level', rate: 1 },
          { name: 'High school', rate: 1.2 },
          { name: 'College', rate: 1.5 },
          { name: 'Undergraduate', rate: 1.8 },
          { name: 'Masters', rate: 2 },
          { name: 'PhD', rate: 2.5 }
        ],
        writerLevels: [
          { level: 'Standard', rate: 1.8 },
          { level: 'Premium', rate: 2.4 },
          { level: 'Platinum', rate: 2.8 }
        ],
        time: [
          { name: '6 hrs', value: 6, charge: 0.85 },
          { name: '12 hrs', value: 12, charge: 0.8 },
          { name: '24 hrs', value: 24, charge: 0.75 },
          { name: '2 days', value: 48, charge: 0.7 },
          { name: '3 days', value: 72, charge: 0.65 },
          { name: '4 days', value: 96, charge: 0.6 },
          { name: '6 days', value: 144, charge: 0.55 },
          { name: '8 days', value: 192, charge: 0.5 },
          { name: '10 days', value: 240, charge: 0.45 },
          { name: '14 days', value: 336, charge: 0.4 },
          { name: '20 days', value: 480, charge: 0.35 },
          { name: '30 days', value: 720, charge: 0.3 },
          { name: '40 days', value: 960, charge: 0.25 }
        ],
        services: [
          { name: 'Writing from scratch', charge: 1 },
          { name: 'Editing and proofreading', charge: 0.85 },
          { name: 'Presentation', charge: 0.5 }
        ],
        spacingOptions: [
          'Single spacing',
          'Double'
        ]
  
      }
    },
    methods: {
      submit () {},
      setTimeValue (deadline) {
        this.order.timeValue = this.time.find((t) => { return t.name === deadline }).value
        //  console.log('tv', this.order.timeValue, deadline)
      }
    }
  }
  